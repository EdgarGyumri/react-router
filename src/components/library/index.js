import img from '../../assets/img/img.jpeg'
import Card from '../card'
import './style.css'

export default function Library() {
    return (
        <section className="library">
            <div className='history'>
                <div>
                    <h2>История</h2>
                </div>
                <div className='library-content'>
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Spider Man" views="3.543.542" />
                    <Card src={img} title="Batman" views="5.321.653" />
                    <Card src={img} title="Home alone" views="66.452.451" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                    <Card src={img} title="Pewdiepie" views="6.436.550" />
                    <Card src={img} title="Xbox series s" views="755.343" />
                    <Card src={img} title="Playstation 5" views="932.430" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                </div>
            </div>
            <div className='later'>
                <div>
                    <h2>Смотреть позже</h2>
                </div>
                <div className='library-content'>
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Spider Man" views="3.543.542" />
                    <Card src={img} title="Batman" views="5.321.653" />
                    <Card src={img} title="Home alone" views="66.452.451" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                    <Card src={img} title="Pewdiepie" views="6.436.550" />
                    <Card src={img} title="Xbox series s" views="755.343" />
                    <Card src={img} title="Playstation 5" views="932.430" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                    <Card src={img} title="Ninja turtles" views="4.452.764" />
                </div>
            </div>
        </section>
    )
}