import React, {Component} from 'react';


    class Display extends Component {
     
        constructor(props) {
            super(props)
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleButtonClick = this.handleButtonClick.bind(this);
            this.handleButtonClickDel = this.handleButtonClickDel.bind(this);
            this.state = { 
               dinosaurs: [],
               name: "",
               type:""
            }
         }

         componentDidMount() {
            this.populateData();
          }

        populateData(){
            this.fetch_retry('/api/dinosaur',3)
            .then(res => res.json())
            .then((data) => {
              this.setState({ dinosaurs : data.result });
              console.log("state set");
              console.log(this.state.dinosaurs);
            })
            .catch(console.log);
        }  

        async fetch_retry(url, n){
            try {
                return await fetch(url)
            } catch(err) {
                if (n === 1) throw err;
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                return await this.fetch_retry(url, n - 1);
            }
        };


          renderTableData() {
            return this.state.dinosaurs.map((transaction, index) => {
               const { id, name, type} = transaction
               return (
                  <tr key={id}>
                     <td>{id}</td>
                     <td>{name}</td>
                     <td>{type}</td>
                  </tr>
               )
            })
         }

        handleButtonClickDel(){
           const requestOptions = {
               method: 'DELETE'
           }
           fetch('/api/dinosaur', requestOptions)
           .then(response => response.json())
           .then(data => this.populateData())

           this.setState({name : "", type:"",dinosaur:[]});

        }

         handleButtonClick(){
             console.log(this.state.name);
             console.log(this.state.type);
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({"amount":this.state.name, "desc" :this.state.type})
            }
            
            fetch('/api/transaction', requestOptions)
            .then(response => response.json())
            .then(data => this.populateData())
            
            this.setState({name : "", type:""});

         }

         handleTextChange(e){
            this.setState({[e.target.name]:e.target.value})
         }


        render () {
        return (
            <div>
            <h1 id='title' style={{paddingRight:"1em"}}>Available Dinosaurs</h1><input style={{float:"right", marginBottom:"1em"}} type = "button" value ="DEL" onClick={this.handleButtonClickDel} />
            <table id='dinosaurs'>
               <tbody>
                   <tr>
                       <td>ID</td>
                       <td>Dinosaur Name</td>
                       <td>Dinosaur Type</td>
                   </tr>
                   <tr>
                        <td><input type = "button" value ="ADD" onClick={this.handleButtonClick}/></td>
                        <td><input type="name" name ="name" value = {this.state.name} onChange={this.handleTextChange}/></td>
                        <td><input type="type" name = "type" value = {this.state.type} onChange={this.handleTextChange}/></td>
                   </tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>

        );
      }
    }

    export default Display;
