import React, {useState , useEffect} from 'react'

const AmountStaking = ({setAmountStake}) => {

const [cantTokensUser , setCantTokensUser] = useState(300) /* cantidad de tokens del usuario */ 
const [maxAmountTokens , setMaxAmountTokens] = useState(cantTokensUser)  /* enlazar el maximo de tokens del usuario */
const [num, setNum] = useState([]);   /* aca se guarda la cantida de tokens que seteo el usuario */


const valueInput = e => {
  let value =  e.target.value
  setNum(value)

  if(value >= 1  &&  num <= maxAmountTokens ) {
    setAmountStake(true)
  }else{
    setAmountStake(false)
  }

  return value
}

useEffect(() => {
  if (num <= maxAmountTokens && num > 1){
    setAmountStake(true)
  }else{
    setAmountStake(false)
  }

},[num])



  return (
    <div className="amount_box">
      <div className="text_amount">
      <div className="amountWallet">
          <p>My Staking:</p>
          <p className='cantTokensUser_staking'>{cantTokensUser}</p>    {/* amount tokens wallet user */}
        </div>
      </div>

      <div className="select_amount">
        <input id="inputTokensAmount" 
              type="number" 
              placeholder='Amount Tokens' 
              maxLength={10}
              min={1}
              max={1000000}
              value={num}
              onChange={valueInput} 
            />
        <button className='buttonMax' onClick={() =>  setNum(maxAmountTokens)}>MAX</button>  {/* onclick que le pegue al maximo del balance de tokens del user */}
      </div>

    </div>
  )
}

export default AmountStaking