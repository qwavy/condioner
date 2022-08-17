import Converter from './Converter'

function Dictionary(){
    const rus_eng = [
        {
            rus:'привет',
            eng:'hello'
        },
        {
            rus:'пока',
            eng:'bye'   
        },{
            rus:'как',
            eng:'how'
        },{
            rus:'что',
            eng:'what'
        },{
            rus:'еда',
            eng:'food'
        },{
            rus:'играть',
            eng:'play'
        },{
            rus:'ходить',
            eng:'go'
        },{
            rus:'идти',
            eng:'walk'
        },{
            rus:'один',
            eng:'one'
        },{
            rus:'два',
            eng:'two'
        }

    ]
    return(
        <Converter rus_eng={rus_eng}/>  
    )
}
export default Dictionary