import React from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const MailingListSignup = () => {
  const emailInputRef = React.useRef();
  const [signedUp, setSignedUp] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailInputRef.current) {
      return;
    }

    addToMailchimp(emailInputRef.current.value);
    setSignedUp(true);
  };

  return signedUp ? (
    <div className="my-8 text-lg text-gray-700 font-bold">
      Thank you for signing up! Check your inbox for a confirmation email.
    </div>
  ) : (
    <form className="flex my-8 flex-col sm:flex-row" onSubmit={handleSubmit}>
      <input
        className="outline-none p-4 sm:mr-4 mb-4 sm:mb-0 flex-1 border border-gray-300 focus:border-gray-500 hover:border-gray-500"
        placeholder="steve@apple.com"
        type="email"
        ref={emailInputRef}
      />
      <button
        type="submit"
        className="border border-gray-300 p-4 text-gray-400 hover:text-gray-500 hover:border-gray-500 bg-white"
      >
        Get Updates
      </button>
    </form>
  );
};

export default MailingListSignup;
