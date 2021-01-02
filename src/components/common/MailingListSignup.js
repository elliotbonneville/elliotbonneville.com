import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailingListSignup = () => {
  const emailInputRef = React.useRef();
  const [signedUp, setSignedUp] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailInputRef.current || !emailInputRef.current.value) {
      return;
    }

    addToMailchimp(emailInputRef.current.value);
    setSignedUp(true);
  };

  return signedUp ? (
    <div className="my-8 text-lg text-gray-700 font-bold">
      Thanks for signing up! 🥳 Check your inbox for a confirmation email (and
      your spambox, if you have to).
    </div>
  ) : (
    <form className="my-8" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row">
        <input
          className="outline-none p-4 sm:mr-4 mb-4 sm:mb-0 flex-1 border border-gray-400 focus:border-gray-600 hover:border-gray-600 rounded-none"
          placeholder="steve@apple.com"
          type="email"
          ref={emailInputRef}
        />
        <button
          type="submit"
          className="border border-gray-400 p-4 text-gray-500 hover:text-gray-600 hover:border-gray-600 bg-white"
        >
          Subscribe
        </button>
      </div>
      <p className="text-gray-500 mt-2 text-sm">
        I send a weekly roundup and the occasional announcement.
      </p>
    </form>
  );
};

export default MailingListSignup;
