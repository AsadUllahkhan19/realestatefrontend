import { forwardRef } from 'react';

const Input = ({_type ,  _name, _value, _onchange, _onblur, _onclick, _errortext , _placeholder , _disabled}, ref) => {
    return (
        <>
        <input type={_type} name={_name} value={_value} onChange={_onchange}
        onBlur={_onblur} onClick={_onclick} required placeholder={_placeholder}
        disabled={_disabled} ref={ref}
        className={`${
           _errortext && "border-red-700"} border-2 border-grey shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  rounded-lg p-6 bg-transparent hover:border-green-500 placeholder-footer h-7 w-full bg-white`} />
    <div className="error-message">{_errortext}</div>
    </>
    )
}
export default forwardRef(Input);