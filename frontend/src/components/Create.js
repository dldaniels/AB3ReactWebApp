// import React, { useState } from 'react';

// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

// const Create = () => (
//     <Form className="create-form">
//         <Form.Field>
//             <label>Dinosaur Name</label>
//             <input placeholder='Dinosaur Name' />
//         </Form.Field>
//         <Form.Field>
//             <label>Dinosaur Type</label>
//             <input placeholder='Dinosaur Type' />
//         </Form.Field>
//         <Button type='submit'>Submit</Button>
//     </Form>
// )

// export default Create;



// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

// export default function Create() {
//     const [name, setName] = useState('');
//     const [type, setType] = useState('');
//     const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }

//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>Dinosaur Name</label>
//                     <input placeholder='Dinosaur Name' />
//                     <input placeholder='Dinosaur Name' onChange={(e) => setName(e.target.value)}/>
//                 </Form.Field>
//                 <Form.Field>
//                     <label>Dinosaur Type</label>
//                     <input placeholder='Dinosaur Type' />
//                     <input placeholder='Dinosaur Type' onChange={(e) => setType(e.target.value)}/>
//                 </Form.Field>


//                 <Button onClick={postData} type='submit'>Submit</Button>


//             </Form>
//         </div>
//     )
// }