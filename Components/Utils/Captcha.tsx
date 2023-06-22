import {ChangeEvent, useState} from 'react'

const Captcha = ({message,trackState}:{message:Function,trackState:boolean}) => {
  const [user, setUser] = useState<any>({
    username:""
});

const characters ='abcdefghijklmnopqrstuvwxyz1234567890';
function generateString(length: number) 
{
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
   return result;
 }
const [captcha,setCaptcha] = useState(generateString(6))
 let handleChange = (e: ChangeEvent<HTMLInputElement>) => {
   let name = e.target.name;
   let value = e.target.value;
   user[name] = value;
   setUser(user);
   
}
const onSubmit = () => {
    var element =  document.getElementById("succesBTN") as HTMLInputElement;
    var inputData:any = document.getElementById("inputType") as HTMLInputElement;
    element.style.cursor = "wait";
    element.innerHTML  = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function(){
          if(captcha == user.username)
          {
            element.innerHTML  = "Captcha Verified";
            element.style.cursor = "not-allowed";
            element.style.backgroundColor = "rgb(22 163 74)"
            message(true)
          }
          else
          {
            element.style.backgroundColor   = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML  = "Not Matched";
            element.disabled = true;
            var myFunction = function(){
              element.style.cursor = "pointer";
              element.innerHTML  = "Verify Captcha";
              element.disabled = false;
              inputData.disabled = false;
              element.style.backgroundColor = "black";
            setCaptcha(generateString(6))
            };
            setTimeout(myFunction,2000);
          }
        }   
        setTimeout(myFunctions,2000); 
  };

  const onRegenerate = () =>{
    setCaptcha(generateString(6))
  }
  return (

    <>
      <div className='flex'>
          <div className='flex ml-0 mr-auto'>
              <input
                type="text"
                id="captcha"
                value={captcha}
                readOnly
                className="w-[50%] text-black tracking-wider text-center h-[100%] text-base pointer-events-none bg-cover bg-center blur-[1.4px] border border-gray-300 rounded-lg"/>
                <button type="button" id="regenerateBTN" onClick={onRegenerate} disabled={trackState} ><span className="material-symbols-outlined">refresh</span></button>
          </div>
          <input
          type="text"
          placeholder="Enter Captcha"
          name="username"
          id="inputType"
          onChange={handleChange}
          autoComplete="off"
          className="w-[40%] p-2 border mr-3 border-gray-300 rounded-lg focus:outline-none focus:border-2 focus:border-black"
        />
          <div className="flex flex-row space-x-4 py-0 transition hover:scale-[1.02]"><button type="button" id="succesBTN" onClick={onSubmit} className="w-full p-2 text-white bg-black rounded-lg" >Verify Captcha</button></div>   
      </div>
    </>
  )
}

export default Captcha