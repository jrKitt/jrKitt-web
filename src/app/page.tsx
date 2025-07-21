export default function Home() {
  return (
    <div className="y2k-bg min-h-screen flex flex-col items-center justify-center">
      <h1 className="y2k-text">Comming Soon..</h1>
      <style>{`
        .y2k-bg {
          background: linear-gradient(135deg, #ff00cc 0%, #3333ff 100%);
          background-size: 400% 400%;
          animation: y2k-bg-move 8s ease-in-out infinite;
        }
        @keyframes y2k-bg-move {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .y2k-text {
          font-family: 'Comic Sans MS', 'Comic Sans', cursive, sans-serif;
          font-size: 3rem;
          font-weight: bold;
          color: #fff;
          text-shadow: 2px 2px 0 #ff0, 4px 4px 0 #0ff, 6px 6px 0 #f0f;
          animation: y2k-spin 1.2s linear infinite;
          padding: 1rem 2rem;
          border: 4px dashed #ff0;
          border-radius: 2rem;
          background: repeating-linear-gradient(45deg, #ff0, #ff0 10px, #0ff 10px, #0ff 20px);
          box-shadow: 0 0 30px 10px #0ff, 0 0 10px 2px #ff0 inset;
        }
        @keyframes y2k-spin {
          0% { transform: rotate(-10deg) scale(1); }
          25% { transform: rotate(10deg) scale(1.1); }
          50% { transform: rotate(-10deg) scale(1.05); }
          75% { transform: rotate(10deg) scale(1.15); }
          100% { transform: rotate(-10deg) scale(1); }
        }
      `}</style>
    </div>
  );
}
