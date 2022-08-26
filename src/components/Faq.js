import React from "react";

const faqs = [
  {
    question: "Who are you and why did you create VEED?",
    answer:
      "Hi! We’re Tim & Sabba. We founded VEED because we were frustrated using complex and time-consuming editing software. We wanted to create a tool that makes video editing fast, easy and accessible to newbies. Thanks to our users around the globe spreading the word about us, we’re growing fast.",
  },
  {
    question: "Why should I pay you?",
    answer:
      "Content creation can be hard but it doesn’t have to be. We make it so simple you can quickly and easily make content frustration-free. How do we do it? We have a talented team and the top-of-the-line software. It's worth every cent. But if you're a content creator looking to save money we have you covered with a free plan too.",
  },
  {
    question: "Do you offer plans for educational institutions?",
    answer:
      "Yes we do. We offer bespoke education plans for faculty wide use. Please contact sales via this form.",
  },
  {
    question: "What does the watermark look like?",
    answer:
      "The watermark is shown in the corner of videos that are created on the free plan. As a self-funded startup, this watermark is important in helping us grow. But as you’ll see below, it doesn’t distract from your content. To remove the watermark, you can choose one of our PRO plans.",
  },
  {
    question: "What is Brand Kit?",
    answer:
      "Brand Kit allows you to add custom brand fonts, colors, images, videos, audio files, and watermarks and reuse them across all projects effortlessly.",
  },
  {
    question: "Do you offer a trial for the paid plans?",
    answer:
      "We don’t currently have a trial, but our free plan allows you to test some of our tools. Go ahead and try it, then if you want to remove the watermark and gain access to HD quality, unlimited uploads, you can switch to a paid plan.",
  },
  {
    question: "Will my subscription automatically renew?",
    answer:
      "Yes, all of our plans are set to automatically renew every month of the year (depending on which plan you chose) until it is cancelled. If you only wish to use the site for 1 month or 1 year, sign up for the plan, and then cancel it right away. Cancelling it right after signing up will mean that the subscription will only be active for that 1 month or 1 year. To cancel your subscription, please follow the instructions on the page which you can access by clicking here.",
  },
  {
    question: "Can I really cancel anytime?",
    answer:
      "Yes, absolutely. If you want to cancel your plan, simply go to your profile and cancel in the account page. If you do cancel, you will continue to have access to all the premium features until the end of your billing cycle.",
  },
  {
    question: "What currencies and payment options are available?",
    answer:
      "Prices are listed in your local currency if available, and if not they are listed in USD. We accept all major debit and credit cards. Our payment system uses the latest security technology and is powered by Stripe, one of the world’s most reliable payment companies. If you have any trouble with paying by card, please contact us and we’ll work out an alternative.",
  },
  {
    question: "Will I receive receipts for my transactions?",
    answer: "You can access receipts for all transactions in your account.",
  },
  {
    question: "What is your refund policy?",
    answer: "You can find our refund policy on our Terms of Sale page.",
  },
  {
    question: "What's the fastest way to reach you in case I need help?",
    answer:
      "Your business is really important to us and we know video editing can be hard. You can contact us via hello@veed.io, or via live chat and we'll respond during our working hours.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#f5f5f5]">
        <div className="w-full max-w-3xl px-5 md:px-10 py-10 md:py-8">
          <div className="mx-auto pt-0 md:pt-0">
            <div className="">
              <div className="py-4">
                <h2 className="text-xl font-semibold text-center capitalize">
                  Frequently Asked question
                </h2>
              </div>
              {faqs.map((faq, key) => (
                <div className="relative overflow-hidden border-b items-center ">
                  <input
                    type="checkbox"
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="min-h-[50px] py-2 w-full pl-3 flex-col items-center leading-none">
                    <div className="py-2">
                      <h1 className="font-semibold">{faq.question}</h1>
                    </div>
                    <span className="text-[12px] text-gray-400 font-thin "></span>
                  </div>
                  <div className="absolute top-4 right-2 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="overflow-hidden bg-[#f5f5f5] transition-all duration-500 max-h-0 peer-checked:max-h-40 px-2">
                    <div className="pl-3 pt-1 pb-3 px-3 text-justify">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
