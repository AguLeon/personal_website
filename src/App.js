import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";

function App() {
  return (
    <div className='bg-[#163321] leading-relaxed text-slate-300 antialiased selection:bg-teal-300 selection:text-teal-900'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
