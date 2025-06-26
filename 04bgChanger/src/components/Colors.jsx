import App from "../App";

function Colors({setColor}) {
    return ( 
        <>
            <div className="flex gap-2 bg-white p-4 rounded-4xl pl-6 pr-6 mb-3 shadow-xl/30">
                <div onClick={() => setColor('red')} className="text-white bg-red-600 p-1 rounded-xl pr-2 pl-2 cursor-pointer">Red</div>
                <div onClick={() => setColor('blue')} className="text-white bg-blue-600 p-1 rounded-xl pr-2 pl-2 cursor-pointer">Blue</div>
                <div onClick={() => setColor('green')} className="text-white bg-green-600 p-1 rounded-xl pr-2 pl-2 cursor-pointer">Green</div>
                <div onClick={() => setColor('pink')} className="text-white bg-pink-600 p-1 rounded-xl pr-2 pl-2 cursor-pointer">Pink</div>
                <div onClick={() => setColor('yellow')} className="text-white bg-yellow-600 p-1 rounded-xl pr-2 pl-2 cursor-pointer">Yellow</div>
            </div>
        </>
     );
}

export default Colors;