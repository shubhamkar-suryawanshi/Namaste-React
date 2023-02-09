import { useState } from 'react';

const Section = ({ que, ans, isVisible, setIsVisible, isHidden }) => {
  return (
    <div className="faq">
      <h3>{que}</h3>

      {isVisible ? (
        <div>
          <button
            onClick={() => {
              isHidden(true);
            }}
          >
            Hide
          </button>
          <p>{ans}</p>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
    </div>
  );
};

const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState('');
  return (
    <>
      <Section
        que={'What is chatGPT?'}
        ans={
          'It is an advanced AI-powered chatbot. It is built on top of OpenAIs GPT-3 family of large language models and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.If uh have multiple components, it will show state and props of each component, component tree this is best way to find props and state define fo particular compnent rather than checking the code. It also shows the hooks used in that component.'
        }
        isVisible={visibleSection === 'what'}
        setIsVisible={() => {
          setVisibleSection('what');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
      <Section
        que={'How chatgpt works?'}
        ans={
          'ChatGPT uses what called a neural network to make sense of writing, and then uses that knowledge to become really good with words.If uh have multiple components, it will show state and props of each component, component tree this is best way to find props and state define fo particular compnent rather than checking the code. It also shows the hooks used in that component.'
        }
        isVisible={visibleSection === 'how'}
        setIsVisible={() => {
          setVisibleSection('how');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
      <Section
        que={'How is ChatGPT different from other chatbots?'}
        ans={
          'ChatGPT, unlike other AI chatbots, can answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.If we make simple global variables, React is not traking it, no reconcilliation process so no update after render'
        }
        isVisible={visibleSection === 'other'}
        setIsVisible={() => {
          setVisibleSection('other');
        }}
        isHidden={() => {
          setVisibleSection('');
        }}
      />
    </>
  );
};

export default FAQ;

// import { useState } from 'react';

// const Section = ({ que, ans }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className="faq">
//       <h3>{que}</h3>

//       {isVisible ? (
//         <div>
//           <button
//             onClick={() => {
//               setIsVisible(false);
//             }}
//           >
//             Hide
//           </button>
//           <p>{ans}</p>
//         </div>
//       ) : (
//         <button
//           onClick={() => {
//             setIsVisible(true);
//           }}
//         >
//           Show
//         </button>
//       )}
//     </div>
//   );
// };

// const FAQ = () => {
//   return (
//     <>
//       <Section
//         que={'What is chatGPT?'}
//         ans={
//           'It is an advanced AI-powered chatbot. It is built on top of OpenAIs GPT-3 family of large language models and is fine-tuned (an approach to transfer learning) with both supervised and reinforcement learning techniques.If uh have multiple components, it will show state and props of each component, component tree this is best way to find props and state define fo particular compnent rather than checking the code. It also shows the hooks used in that component.'
//         }
//       />
//       <Section
//         que={'How chatgpt works?'}
//         ans={
//           'ChatGPT uses what called a neural network to make sense of writing, and then uses that knowledge to become really good with words.If uh have multiple components, it will show state and props of each component, component tree this is best way to find props and state define fo particular compnent rather than checking the code. It also shows the hooks used in that component.'
//         }
//       />
//       <Section
//         que={'How is ChatGPT different from other chatbots?'}
//         ans={
//           'ChatGPT, unlike other AI chatbots, can answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.If we make simple global variables, React is not traking it, no reconcilliation process so no update after render'
//         }
//       />
//     </>
//   );
// };

// export default FAQ;
