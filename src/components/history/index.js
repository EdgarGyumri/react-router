import Card from "../card";
import img from '../../assets/img/img.jpeg'
import './style.css'

export default function History() {
    return (
        <section className="history">
            <h1>История</h1>
            <div>
                <div>
                    <h2>Сегодня</h2>
                </div>
                <div className="history-content">
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                </div>
            </div>
            <div>
                <div>
                    <h2>Вчера</h2>
                </div>
                <div className="history-content">
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                    <Card src={img} title="Donald Trump" views="2.000.000" />
                </div>
            </div>
        </section>
    )
}