const Page = ({params}:{params:{questionId:string}})=>{
  return(
    <>
      <div className={"divide-y divide-gray-300"}>
        <div>
          <h2 className={"pl-6 py-6 text-3xl"}>How NOT to execute a script by double-clicking on a cell or pressing F2</h2>
        </div>
        <div className={"mx-6"}>
          <div className={"flex flex-row"}>
            <div className={"flex flex-col"}>
              <text className={"pr-6"}>O</text>
              <text className={"pr-6"}>O</text>
              <text className={"pr-6"}>O</text>
            </div>
            <text>The shown procedure is for an existing input ma
              sk that I am not allowed to change. I am able to collect se
              ver al data from different cells by formula but the user must be a
              ble to input numbers without affecting this formulas. I am really new to
              VBA but the users are (not willing) or not able to understand simple excel pro
              cedures at all. This script stores the content of a cell by selection. By worksh
              eet change (the cell gets a new input) the formula in cell will be divided in a left
              part before the closing parenthese as String and in a
              right part as a value (Long). The result is t
              he formula (left Part) and the Value (right part) plus the input in the selected (initial) cell. The formulas contain referenc
              sk that I am not allowed to change. I am able to collect se
              ver al data from different cells by formula but the user must be a
              ble to input numbers without affecting this formulas. I am really new to
              VBA but the users are (not willing) or not able to understand simple excel pro
              cedures at all. This script stores the content of a cell by selection. By worksh
              eet change (the cell gets a new input) the formula in cell will be divided in a left
              part before the closing parenthese as String and in a
              right part as a value (Long). The result is t
              he formula (left Part) and the Value (right part) plus the input in the selected (initial) cell. The formulas contain referenc
              sk that I am not allowed to change. I am able to collect se
              ver al data from different cells by formula but the user must be a
              ble to input numbers without affecting this formulas. I am really new to
              VBA but the users are (not willing) or not able to understand simple excel pro
              cedures at all. This script stores the content of a cell by selection. By worksh
              eet change (the cell gets a new input) the formula in cell will be divided in a left
              part before the closing parenthese as String and in a
              right part as a value (Long). The result is t
              he formula (left Part) and the Value (right part) plus the input in the selected (initial) cell. The formulas contain referenc
            </text>
          </div>
          <div className={"pl-9 pt-6"}>
            <textarea className="textarea textarea-bordered w-full h-60" placeholder="在这里输入你的回复"></textarea>
            <div className={"flex justify-end"}>
              <button className={"btn"}>回复</button>
            </div>
          </div>
          <div>
            <ul className={"divide-y divide-gray-300"}>
              <li className={"py-6"}>
                <div className={"flex flex-row"}>
                  <div className={"flex flex-col"}>
                    <text className={"pr-6"}>O</text>
                    <text className={"pr-6"}>O</text>
                    <text className={"pr-6"}>O</text>
                  </div>
                  <text>The shown procedure is for an existing input ma
                    sk that I am not allowed to change. I am able to collect se
                    ver al data from different cells by formula but the user must be a
                    ble to input numbers without affecting this formulas. I am really new to
                    VBA but the users are (not willing) or not able to understand simple excel pro
                    cedures at all. This script stores the content of a cell by selection. By worksh
                    eet change (the cell gets a new input) the formula in cell will be divided in a left
                    part before the closing parenthese as String and in a
                    right part as a value (Long). The result is t
                    he formula (left Part) and the Value (right part) plus the input in the selected (initial) cell. The formulas contain referenc
                  </text>
                </div>
              </li>
              <li className={"py-6"}>
                <div className={"flex flex-row"}>
                  <div className={"flex flex-col"}>
                    <text className={"pr-6"}>O</text>
                    <text className={"pr-6"}>O</text>
                    <text className={"pr-6"}>O</text>
                  </div>
                  <text>The shown procedure is for an existing input ma
                    sk that I am not allowed to change. I am able to collect se
                    ver al data from different cells by formula but the user must be a
                    ble to input numbers without affecting this formulas. I am really new to
                    VBA but the users are (not willing) or not able to understand simple excel pro
                    cedures at all. This script stores the content of a cell by selection. By worksh
                    eet change (the cell gets a new input) the formula in cell will be divided in a left
                    part before the closing parenthese as String and in a
                    right part as a value (Long). The result is t
                    he formula (left Part) and the Value (right part) plus the input in the selected (initial) cell. The formulas contain referenc
                  </text>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page;