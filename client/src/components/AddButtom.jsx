import iconAdd from '../assets/images/addIcon.png';

function AddButtom() {
 return (
    <>
        <button className="buttons m-3" id="boxIconAdd">
            <img className="icons"  src={iconAdd} />
        </button>
    </>
 );
}

export default AddButtom;