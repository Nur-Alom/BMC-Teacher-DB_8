
import './Teachers.css'

const Teachers = (props) => {
    const { name, img, phone, email, department, salary } = props.teacher

    return (
        <div className="teachers">
            <div className="teacher">
                <img src={img} alt="" />
                <div className="detail">
                    <p>Name: <strong>{name}</strong></p>
                    <p>Department: <strong>{department}</strong></p>
                    <p>E-mail: <strong>{email}</strong></p>
                    <p>Salary: <strong>{salary}</strong></p>
                    <p>Phone: <strong>{phone}</strong></p>
                    <div className="select-btn">
                        <button
                            onClick={() => props.handleCart(props.teacher)}>
                            <i className="fas fa-user-plus"></i> Select teacher </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Teachers;