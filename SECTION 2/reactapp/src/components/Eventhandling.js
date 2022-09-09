import React, { useState } from 'react'

const Eventhandling = () => {

    let x = 10;

    const [count, setCount] = useState(10);

    const handleclick = () => {
        console.log('button was click');
        x++;

        console.log(x);
        // alert('value of x is'+x);


    }

    const loadImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (data) => {
            console.log(data);
        }
        reader.readAsDataURL(file);
    }


    return (
        <div className='container'>
            <h1>Event Handling</h1>
            <hr />

            <h2>Click Event</h2>
            <button className='btn btn-primary' onClick={(e) => { alert('You clicked that button') }} >Handle Click</button>

            <button className='btn btn-danger' onClick={handleclick} >Passing Defined Function</button>
            <h1>{x}</h1>

            <button className='btn btn-success' onClick={  ()  =>  { setCount(count+1); } }>Udating State</button>
            <h1>{count}</h1>



            <h2 classname='mt-5'>Change Event </h2>
            <div className='input-group'>
                <input className='form-control' onChange={(e) => { console.log(e.target.value)}} />
                <button className='btn btn-primary'>Send</button>

            </div>

            <input className='form-control mt-4' type="file" onChange={(e) => { console.log(e.target.files) }} />

        </div>
    )


}

export default Eventhandling