import './style.css'

export default function Card(props) {
    return (
        <div className='card'>
            <div>
                <img class="card-img" src={props.src} alt="card img" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <span>Views: {props.views}</span>
            </div>
        </div>
    )
}