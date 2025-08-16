---
title: Async/Await Patterns You Should Know
date: 2024-01-20
description: Master asynchronous JavaScript with practical async/await patterns and interactive examples
---

Async/await transformed how we write asynchronous JavaScript. It makes async code look and behave more like synchronous code, eliminating "callback hell" and making error handling straightforward.

## The Fundamentals

Async/await is built on Promises. Every `async` function returns a Promise, and `await` pauses execution until a Promise resolves:

```javascript
// Promise-based approach
function fetchUserData(id) {
  return fetch(`/api/users/${id}`)
    .then(response => response.json())
    .then(user => {
      console.log('User:', user);
      return user;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

// Async/await approach
async function fetchUserData(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    console.log('User:', user);
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

## Interactive Promise Demo

Let's see async/await in action with a simulated API call:

<div class="example">
  <p>Simulate API Calls:</p>
  <button onclick="runSequentialCalls()">Sequential Calls</button>
  <button onclick="runParallelCalls()">Parallel Calls</button>
  <button onclick="runMixedCalls()">Mixed Pattern</button>
  <button onclick="clearResults()">Clear</button>
  
  <div id="asyncResults"></div>
  
  <script>
    // Simulate an API call with random delay
    function simulateApiCall(endpoint, delay = Math.random() * 2000 + 500) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            endpoint,
            data: `Response from ${endpoint}`,
            timestamp: new Date().toLocaleTimeString()
          });
        }, delay);
      });
    }
    
    function logResult(message, startTime) {
      const results = document.getElementById('asyncResults');
      const elapsed = Date.now() - startTime;
      results.innerHTML += `<p><strong>${elapsed}ms:</strong> ${message}</p>`;
    }
    
    async function runSequentialCalls() {
      clearResults();
      const startTime = Date.now();
      logResult('Starting sequential calls...', startTime);
      
      try {
        const user = await simulateApiCall('/api/user');
        logResult(`Got user: ${user.data}`, startTime);
        
        const posts = await simulateApiCall('/api/posts');
        logResult(`Got posts: ${posts.data}`, startTime);
        
        const comments = await simulateApiCall('/api/comments');
        logResult(`Got comments: ${comments.data}`, startTime);
        
        logResult('✅ Sequential calls completed!', startTime);
      } catch (error) {
        logResult(`❌ Error: ${error.message}`, startTime);
      }
    }
    
    async function runParallelCalls() {
      clearResults();
      const startTime = Date.now();
      logResult('Starting parallel calls...', startTime);
      
      try {
        const [user, posts, comments] = await Promise.all([
          simulateApiCall('/api/user'),
          simulateApiCall('/api/posts'),
          simulateApiCall('/api/comments')
        ]);
        
        logResult(`Got all data: ${user.data}, ${posts.data}, ${comments.data}`, startTime);
        logResult('✅ Parallel calls completed!', startTime);
      } catch (error) {
        logResult(`❌ Error: ${error.message}`, startTime);
      }
    }
    
    async function runMixedCalls() {
      clearResults();
      const startTime = Date.now();
      logResult('Starting mixed pattern...', startTime);
      
      try {
        // First get user data
        const user = await simulateApiCall('/api/user');
        logResult(`Got user: ${user.data}`, startTime);
        
        // Then get posts and profile in parallel
        const [posts, profile] = await Promise.all([
          simulateApiCall('/api/posts'),
          simulateApiCall('/api/profile')
        ]);
        
        logResult(`Got posts and profile: ${posts.data}, ${profile.data}`, startTime);
        logResult('✅ Mixed pattern completed!', startTime);
      } catch (error) {
        logResult(`❌ Error: ${error.message}`, startTime);
      }
    }
    
    function clearResults() {
      document.getElementById('asyncResults').innerHTML = '';
    }
  </script>
</div>

Notice how parallel calls complete much faster than sequential ones!

## Essential Patterns

### 1. Sequential Processing
When you need results from one call to make the next:

```javascript
async function processUserWorkflow(userId) {
  const user = await fetchUser(userId);
  const permissions = await fetchPermissions(user.role);
  const data = await fetchUserData(user.id, permissions);
  return data;
}
```

### 2. Parallel Processing
When calls are independent:

```javascript
async function loadDashboard(userId) {
  const [user, posts, analytics] = await Promise.all([
    fetchUser(userId),
    fetchUserPosts(userId),
    fetchAnalytics(userId)
  ]);
  
  return { user, posts, analytics };
}
```

### 3. Error Handling with Try-Catch
Clean error handling across multiple async operations:

```javascript
async function robustDataFetch(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    if (error.code === 'USER_NOT_FOUND') {
      return { user: null, posts: [] };
    }
    throw error; // Re-throw unexpected errors
  }
}
```

### 4. Promise.allSettled for Fault Tolerance
When you want all results, even if some fail:

```javascript
async function fetchAllData(userId) {
  const results = await Promise.allSettled([
    fetchUser(userId),
    fetchPosts(userId),
    fetchComments(userId),
    fetchLikes(userId)
  ]);
  
  return results.map((result, index) => ({
    source: ['user', 'posts', 'comments', 'likes'][index],
    success: result.status === 'fulfilled',
    data: result.status === 'fulfilled' ? result.value : null,
    error: result.status === 'rejected' ? result.reason : null
  }));
}
```

### 5. Timeout Pattern
Add timeouts to prevent hanging:

```javascript
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), ms)
    )
  ]);
}

async function fetchWithTimeout(url) {
  try {
    const response = await withTimeout(fetch(url), 5000);
    return await response.json();
  } catch (error) {
    if (error.message === 'Timeout') {
      console.log('Request timed out');
    }
    throw error;
  }
}
```

### 6. Retry Pattern
Retry failed requests with exponential backoff:

```javascript
async function retryRequest(fn, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
      console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
const data = await retryRequest(() => fetch('/api/unreliable-endpoint'));
```

### 7. Processing Arrays with Async/Await

```javascript
// Sequential processing (slower)
async function processSequentially(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item);
    results.push(result);
  }
  return results;
}

// Parallel processing (faster)
async function processInParallel(items) {
  return Promise.all(items.map(item => processItem(item)));
}

// Controlled concurrency
async function processWithConcurrency(items, concurrency = 3) {
  const results = [];
  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map(item => processItem(item))
    );
    results.push(...batchResults);
  }
  return results;
}
```

## Common Pitfalls

### 1. Forgetting to Await
```javascript
// Wrong - returns a Promise, not the actual data
async function getData() {
  return fetchData(); // Missing await!
}

// Right
async function getData() {
  return await fetchData();
}
```

### 2. Unnecessary Sequential Processing
```javascript
// Slow - unnecessarily sequential
async function loadUserData(id) {
  const user = await fetchUser(id);
  const posts = await fetchPosts(id); // Could run in parallel
  const friends = await fetchFriends(id); // Could run in parallel
  return { user, posts, friends };
}

// Fast - parallel where possible
async function loadUserData(id) {
  const [user, posts, friends] = await Promise.all([
    fetchUser(id),
    fetchPosts(id),
    fetchFriends(id)
  ]);
  return { user, posts, friends };
}
```

### 3. Error Handling in Loops
```javascript
// Wrong - one failure stops everything
async function processItems(items) {
  return Promise.all(items.map(async (item) => {
    return await processItem(item); // If one fails, all fail
  }));
}

// Better - handle individual failures
async function processItems(items) {
  return Promise.allSettled(items.map(async (item) => {
    try {
      return await processItem(item);
    } catch (error) {
      console.error(`Failed to process item ${item.id}:`, error);
      return null;
    }
  }));
}
```

## Best Practices

1. **Use async/await for readability** - It's generally more readable than Promise chains
2. **Parallelize independent operations** - Use `Promise.all()` when operations don't depend on each other
3. **Handle errors appropriately** - Use try-catch blocks and consider `Promise.allSettled()` for fault tolerance
4. **Add timeouts for external calls** - Prevent hanging requests
5. **Be mindful of performance** - Don't make unnecessary sequential calls
6. **Consider using a library** - For complex scenarios, libraries like p-limit can help manage concurrency

Async/await makes asynchronous JavaScript much more approachable. The key is understanding when to run operations sequentially vs in parallel, and how to handle errors gracefully. Master these patterns, and you'll write more efficient, maintainable async code.