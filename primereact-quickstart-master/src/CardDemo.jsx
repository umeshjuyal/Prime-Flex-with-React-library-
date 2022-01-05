import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CardDemo = () => {
const header = (
 <div>
 <div className='row'>
 <div className="column">
{/* //  style={{backgroundColor: "#aaa",float: "left",
//   width: "100%",
//   padding: "10px",
//   height: "500px" ,
//   }} */}
<img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://sslimages.shoppersstop.com/sys-master/root/h4e/h01/26713307742238/Womens-Page-Occasio-Shopping-4-Widgets-Casual-Wear-Web_20211217.jpg'}/>
</div>
</div>

<div className="column" style={{backgroundColor:"#bbb", }}>
 <img alt="Card" src="images/usercard.png"  onError={(e) => e.target.src='https://sslimages.shoppersstop.com/sys-master/root/h75/h53/26713308069918/Womens-Page-Occasio-Shopping-4-Widgets-Ethnic-Web_20211217.jpg'}/>
 </div>   

 <div className='column' style={{backgroundColor: "#ccc",}}>
<img alt="Card" src="images/usercard.png" style={{width:"100%" ,height:"300px"}} onError={(e) => e.target.src='https://sslimages.shoppersstop.com/sys-master/root/ha6/h59/26729732997150/Kurtas-4-Widgets-Web_20211221.jpg'}/>
</div>   

<div className='column' style= {{backgroundColor:"#ddd", }}>
<img alt="Card" src="images/usercard.png" style={{width:"100%",height:"300px"}} onError={(e) => e.target.src='https://sslimages.shoppersstop.com/sys-master/root/h79/h79/26713301745694/Jackets-_-Coats_4widget_web_20211217.jpg'}/></div>
</div>

    );
const footer = (
        <>
        {/* <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
        </span>
        */}
        </>
    );
    
return(
<>
<Card title=" "
 style={{ width: '50%' , height:"300px" }} 
 footer={footer} header={header}>
<p className="p-m-0" style={{lineHeight: '1'}}></p>
</Card>




</>
)
}
export default CardDemo;
