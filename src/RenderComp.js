import React, { Component } from 'react';
import TextContent from './TextContent';
import {Grid, Divider, Segment, GridColumn, Dropdown, Form , Button, Checkbox, Icon } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import App from './App';
import FacebookAndTwitter from './FacebookAndTwitter';
import './assets/css/App.css';
import MyCloud from './MyCloud';
import SimpleTable from './components/table';
import MyTweets from './MyTweets';
import Mylinks from './Mylinks';
import phrase from './phrase_frequency.json';
import MultipleSelect from './MultipleSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PositiveNegative from './PositiveNegative';
import Medication from './Medication';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import {Carousel} from 'react-responsive-carousel';
import MyCarousel from './MyCarousel';

const loadingIcon = <Icon loading style={{ fontSize: 150, color:"black" }} name='spinner' />;
let current = '';
let prev = '';
let numberofCheckBoxSelected = 0;
var topicOptions = [
  // {
  //   key: 'Heart Hypertension',
  //   text: 'Heart Hypertension',
  //   value: 'heart hypertension',

  // },
  {
    key: 'Addiction',
    text: 'Addiction',
    value: 'addiction',
  },
  {
    key: 'Allergy',
    text: 'Allergy',
    value: 'allergy',
  },
  {
    key: 'Alzheimer',
    text: 'Alzheimer',
    value: 'alzheimer',
  },
  {
    key:'arthritis',
    text: 'Arthritis',
    value: 'arthritis',
  },
  {
    key: 'asthma',
    text: 'Asthma',
    value: 'asthma',
  },
  {
    key:'birth control',
    text: 'Birth Control',
    value: 'birth control',
  },
  {
    key:'blindness',
    text: 'Blindness',
    value: 'blindness',
  },
  {
    key:'bowel',
    text: 'Bowel',
    value: 'bowel',
  },
  {
    key:'brain',
    text: 'Brain',
    value: 'brain',
  },
  {
    key: 'cancer',
    text: 'Cancer',
    value: 'cancer',
  },
  {
    key:'cholesterol',
    text: 'Cholesterol',
    value: 'cholesterol',
  },
  {
    key:'common diseases',
    text: 'Common Diseases',
    value: 'common diseases',
  },
  {
    key:'depression',
    text: 'Depression',
    value: 'depression',
  },
  {
    key: 'diabetes',
    text: 'Diabetes',
    value: 'diabetes',
  },
  {
    key:'ear',
    text: 'Ear',
    value: 'ear',
  },
  {
    key:'erectile dysfunction',
    text: 'Erectile Dysfunction',
    value: 'erectile dysfunction',
  },
  {
    key: 'heart',
    text: 'Heart',
    value: 'heart',
  },
  {
    key:'hiv',
    text: 'Hiv',
    value: 'hiv',
  },
  {
    key:'infection',
    text: 'Infection',
    value: 'infection',
  },
  {
    key:'inflammation',
    text: 'Inflammation',
    value: 'inflammation',
  },
    // {
  //   key:'insurance',
  //   text: 'Insurance',
  //   value: 'insurance',
  // },
  {
    key:'kidney',
    text: 'Kidney',
    value: 'kidney',
  },
  {
    key: 'liver',
    text: 'Liver',
    value: 'liver',
  },
  {
    key:'lung',
    text: 'Lung',
    value: 'lung',
  },

  {
    key:'mental health',
    text: 'Mental Health',
    value: 'mental health',
  },
  {
    key:'migraine',
    text: 'Migraine',
    value: 'migraine',
  },
  {
    key:'nerve autoimmune',
    text: 'Nerve Autoimmune',
    value: 'nerve autoimmune',
  },
  {
    key:'obesity',
    text: 'Obesity',
    value: 'obesity',
  },
  {
    key: 'pain',
    text: 'Pain',
    value: 'pain',
  },
  {
    key:'paralysis',
    text: 'Paralysis',
    value: 'paralysis',
  },
  {
    key:'pets',
    text: 'Pets',
    value: 'pets',
  },
  {
    key: 'Pregnancy',
    text: 'Pregnancy',
    value: 'pregnancy',
  },
  {
    key:'side effects',
    text: 'Side Effects',
    value: 'side effects',
  },
  {
    key:'skin',
    text: 'Skin',
    value: 'skin',
  },
  {
    key:'std',
    text: 'Std',
    value: 'std',
  },
  {
    key:'Thyroid',
    text: 'Thyroid',
    value: 'thyroid',
  },
  {
    key:'Weight Loss',
    text: 'Weight Loss',
    value: 'weight loss',
  },

];

class RenderComp extends Component {
    constructor(props)
     {
        super(props);
        this.state = {
            myTopic:"addiction",
            allInformation:[],
            card:false,
            insur:false,
            data: [],
            img:"",
            cloudData:[],
            phraseSelected:[],
            multiplePhraseSelected:[],
            getApiResultForMultiplePhrase:[],
            phraseString:"",
            loading:false,
            selectedCheckBox:[],
            insuranceSentimentPositive:true,
            insuranceSentimentNegative:true,
            cardSentimentPositive:true,
            cardSentimentNegative:true,
            firsLoad:true,
         }
         this.handleTopicSelect = this.handleTopicSelect.bind(this);
         this.getData = this.getData.bind(this);
         this.cardSelected = this.cardSelected.bind(this);
         this.insuranceSelected = this.insuranceSelected.bind(this);
         this.handlePhraseSelected = this.handlePhraseSelected.bind(this);
         this.sendPhrases = this.sendPhrases.bind(this);
         this.handleInsuranceSentimentPositive = this.handleInsuranceSentimentPositive.bind(this);
         this.handleInsuranceSentimentNegative = this.handleInsuranceSentimentNegative.bind(this);
         this.handleCardSentimentPositive = this.handleCardSentimentPositive.bind(this);
         this.handleCardSentimentNegative = this.handleCardSentimentNegative.bind(this);
    }
    handleCardSentimentPositive()
    {
      if(this.state.cardSentimentPositive == true)
      this.setState({cardSentimentPositive: false});
      else
      this.setState({cardSentimentPositive: true});
    }
    handleCardSentimentNegative(){
      if(this.state.cardSentimentNegative == true)
      this.setState({cardSentimentNegative: false});
      else
      this.setState({cardSentimentNegative: true});
    }
    handleInsuranceSentimentPositive(){
      if(this.state.insuranceSentimentPositive == true)
      this.setState({insuranceSentimentPositive: false});
      else
      this.setState({insuranceSentimentPositive: true});
    }
    handleInsuranceSentimentNegative(){
      if(this.state.insuranceSentimentNegative == true)
      this.setState({insuranceSentimentNegative: false})
      else
      this.setState({insuranceSentimentNegative: true})
    }
    componentDidMount()
    {
      this.setState({loading: true});
      if(this.state.firsLoad == true)
      {
        this.state.firstLoad = false;
        var url = "/topic?topic_name="+this.state.myTopic;
          fetch(url, {
            method: 'GET',
      			headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
          }).then((response) => {
            if(response.status == 200)
              {
                return response.json();
              }
      			else {
      				alert('Uh Oh! Something went wrong');
      				return -1;
      			}
          }).then((data) => {
      			if(data == -1)
              return;
              console.log(data);
              this.setState({data: data, loading:false});
              this.createWordCloudData();
      		}
          )
        }
      
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
      if(this.state.myTopic != '' && current != prev)
      {
        prev = current;
        var url = "/topic?topic_name="+this.state.myTopic;
          fetch(url, {
            method: 'GET',
      			headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
          }).then((response) => {
            if(response.status == 200)
              {
                return response.json();
              }
      			else {
      				alert('Uh Oh! Something went wrong');
      				return -1;
      			}
          }).then((data) => {
      			if(data == -1)
              return;
              this.setState({data: data, loading:false});
              this.createWordCloudData();
      		}
      		)
      }
    }

    handleTopicSelect(event, {value})
    {
      this.setState({myTopic: value, loading:true});
      current = value;
    }
    cardSelected(event)
    {
    var temp = !(this.state.card);
    this.setState({card: temp});
    }
    insuranceSelected(event)
    {
        var temp = !(this.state.insur);
        this.setState({insur: temp});
    }

    checkBoxSelected = (event, {value}) =>
    {

        var temp = [] ;
        var isPresent = false;
        for(let i = 0 ; i<this.state.selectedCheckBox.length ; i++)
        {
          if(value == this.state.selectedCheckBox[i])
           {
            isPresent = true;
            numberofCheckBoxSelected -= 1;
            break;
           }
        }
        if(isPresent == false)
        {
          numberofCheckBoxSelected += 1;
          temp = this.state.selectedCheckBox;
          temp.push(value);
          this.setState({selectedCheckBox: temp});
        }
        else
        {
          for(let i = 0 ; i<this.state.selectedCheckBox.length ; i++)
          {
            if(this.state.selectedCheckBox[i] == value)
            {
              continue;
            }
            temp.push(this.state.selectedCheckBox[i]);
          }
          this.setState({selectedCheckBox: temp});
        }
    }

    handlePhraseSelected(event, {value}){
      this.setState({multiplePhraseSelected: value});
    }

    sendPhrases()
    {
      if(numberofCheckBoxSelected === 0)
      {
        this.getData(this.state.myTopic);
      }
      else
      {
      var temp = "";
      this.setState({loading: true});
      for(let i = 0 ; i<this.state.selectedCheckBox.length; i++)
      {
        temp += this.state.selectedCheckBox[i] + ',';
      }
      this.setState({phraseString: temp});
      var temp1 = "";
      for(let i = 0 ; i<temp.length-1;i++)
      temp1 += temp[i];
      var url  = "/phrases?topic_name=" + this.state.myTopic + "&topic_phrases=" + temp1;
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        },
      }).then((response) => {
        if(response.status == 200)
          {
            return response.json();
          }
        else {
          alert('Uh Oh! Something went wrong');
          return -1;
        }
      }).then((data) => {
        if(data == -1)
          return;
          this.setState({data: data, loading:false});
      }
      )
    }
    }
    createWordCloudData = () =>
    {
        var myData = [];
        let myoptions = [];
        for(let i = 0 ; i<phrase.length ; i++)
        {
          var temp = [];

          if(phrase[i].Topic === this.state.myTopic)
          {
            temp.push(phrase[i].Phrase);
            // temp.push(phrase[i].Frequency);
            myData.push(temp);
            myoptions.push({key: phrase[i].Phrase, text: phrase[i].Phrase, value: phrase[i].Phrase});
          }
        }
        this.setState({cloudData: myData});
        this.setState({phraseSelected: myoptions})
    }

    getData = (value) =>
    {

      this.setState({loading: true});
      if(this.state.myTopic != ''){
        var url = "/topic?topic_name="+value;
          fetch(url, {
            method: 'GET',
      			headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
          }).then((response) => {
            if(response.status == 200)
              {
                return response.json();
              }
      			else {
      				alert('Uh Oh! Something went wrong');
      				return -1;
      			}
          }).then((data) => {
      			if(data == -1)
              return;
              // console.log(data);
              this.setState({data: data, loading:false});
              this.createWordCloudData();
      		}
      		)
      }
}
    render()
    {
        const checkBoxStyle = {
            fontSize: '30px', paddingBottom:'18px'
        }

        if(this.state.cloudData.length !== 0)
        {
        var l = [];
        var data = [];
        data = this.state.cloudData;
        if(this.state.cloudData.length != 0 )
        {
          let i = 0 ;
          while(i < data.length)
        {
            if( data.length - i == 1)
            {
              l.push(<TableRow>
                <TableCell>
                {/* <div class="ui checkbox">
                <input type="checkbox" class="hidden" readonly="" tabindex="0" /><h3>"I am here"</h3>
                <label>{data[i++][0]}</label>
              </div> */}
              <Checkbox key={data[i][0]} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}
              </TableCell>
            </TableRow>)
            }
            else if( data.length - i == 2)
            {
              l.push(<TableRow>
                <TableCell><Checkbox key={data[i][0]} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i][0]} />{data[i++][0]}</TableCell>
                <TableCell ><Checkbox key={data[i][0]} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}</TableCell>
            </TableRow>)
            }
            else if(data.length - i >= 3)
              {
                  l.push(<TableRow>
                <TableCell><Checkbox key={data[i][0]} style={{marginRight:'5px'}}  onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}</TableCell>
                <TableCell ><Checkbox key={data[i][0]} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}</TableCell>
                <TableCell ><Checkbox key={data[i][0]} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}</TableCell>
            </TableRow>)
              }
        }
      }
    }
        const {img} = this.state
        return (

            <div>
                <div>
                <HeaderBar></HeaderBar>
                </div>
                <Grid textAlign='center' style={{padding:'20px'}} columns={2}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Segment>
                             <Dropdown defaultValue={topicOptions[0].value} fluid selection options={topicOptions} onChange={this.handleTopicSelect}/>
                            </Segment>
                            <Segment >
                            {/* <Segment><WordCloud data = {this.state.cloudData}/></Segment> */}
                            {/* <Segment><MultipleSelect data ={this.state.cloudData}/></Segment> */}
                            {/* <Dropdown placeholder='Select Phrases' fluid multiple selection options={this.state.phraseSelected} onChange={this.handlePhraseSelected} placeholder ="Select Phrases"/> */}
                          <div className = "phrase-style">
                                <Paper>
                                  <Table>
                                    <TableHead>
                                      <TableRow>
                                      <TableCell style={{fontWeight:'bold', fontSize:'16px', color:'black'}}>Topical Phrases</TableCell>
                                      <TableCell ></TableCell>
                                      <TableCell ></TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>{l}</TableBody>
                                  </Table>
                                </Paper>
                          </div>
                                <Button style={{marginTop:'10px', color:'black'}} onClick={this.sendPhrases}>Get Data</Button>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                              <FacebookAndTwitter data = {this.state.data}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor:"rgb(125, 171, 238)"}}>
                      { this.state.loading == true ? (
                        <div style={{ textAlign: 'center',width:'200px', height:'200px', zIndex:'10', position:'absolute' }}>
                          { loadingIcon }
                        </div>
                      ) : (<div/>)
                      }
                      <Grid.Column >
                      <Checkbox label="Card/Customer" style = {checkBoxStyle} onChange={this.cardSelected}></Checkbox>
                      </Grid.Column>
                      <Grid.Column>
                      {/* <Checkbox label="Insurance/Patient" style = {checkBoxStyle} onChange={this.insuranceSelected}></Checkbox> */}
                      <div><h1 style={{color:'black'}}>Insurance/Patient</h1></div>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor:"rgb(125, 171, 238)"}}>
                    { this.state.card == true ? (
                      <Grid.Column style={{maxHeight:'1200px', overflowY:'auto'}}>
                         <Segment>
                         <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Card</div>
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><MyCloud data={this.state.data.card_dict.card_list}/></div>
                            )
                          }
                        </Segment>
                        <Segment>
                        <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Medication</div>
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><Medication data = {this.state.data.card_dict.medication_list}/></div>
                            )
                          }
                        </Segment>
                         <Segment>
                        <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Cost</div>
                        {
                          this.state.data.length == 0 ? (
                               <div></div>
                             ) : (
                               <div ><MyCloud data={this.state.data.card_dict.cost_list}/></div>
                            )
                          }
                        </Segment>
                       <Segment>
                        <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Service</div>
                        {
                          this.state.data.length == 0 ? (
                               <div></div>
                             ) : (
                               <div><MyCloud data={this.state.data.card_dict.service_list}/></div>
                            )
                        }
                        </Segment>
                        </Grid.Column>
                    ) : (
                      <Grid.Column style={{maxHeight:'1200px', overflowY:'auto'}}>
                         <Segment>
                         <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Card</div>
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><MyCloud data={this.state.data.without_insurance_dict.card_list}/></div>
                            )
                          }
                        </Segment>
                        <Segment>
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><Medication data = {this.state.data.without_insurance_dict.medication_list}/></div>
                            )
                        }
                        </Segment>
                          <Segment>
                        <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Cost</div>
                        {
                          this.state.data.length == 0 ? (
                               <div></div>
                             ) : (
                               <div ><MyCloud data={this.state.data.without_insurance_dict.cost_list}/></div>
                            )
                          }
                        </Segment>
                       <Segment>
                        <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Service</div>
                        {
                          this.state.data.length == 0 ? (
                               <div></div>
                             ) : (
                               <div><MyCloud data={this.state.data.without_insurance_dict.service_list}/></div>
                            )
                        }
                        </Segment>
                        </Grid.Column>
                    )}
                      <Grid.Column style={{maxHeight:'1200px', overflowY:'auto'}}>
                     <Segment>
                       <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Insurance</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.insurance_list}/></div>
                          )
                        }
                      </Segment>
                      <Segment>

                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div><Medication data = {this.state.data.insurance_dict.medication_list}/></div>
                            )
                        }
                        </Segment>
                       <Segment>
                      {/* <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Disease</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div ><MyCloud data={this.state.data.insurance_dict.disease_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Medication</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                            <div><MyCloud data={this.state.data.insurance_dict.medication_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      */}
                      <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Cost</div>
                      {
                        this.state.data.card_dict == null ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.cost_list}/></div>
                          )
                        }
                      </Segment>
                     <Segment>
                      <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Service</div>
                      {
                        this.state.data.card_dict == null ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.service_list}/></div>
                          )
                      }
                      </Segment>
                      </Grid.Column>
                    </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                      <h3>Card Related Messages</h3>
                      <Checkbox label="Neg" style={{marginRight:"10px"}} onChange={this.handleCardSentimentPositive}></Checkbox>
                      <Checkbox label="Pos"  onChange={this.handleCardSentimentNegative}></Checkbox>

                        {
                        this.state.data.length === 0 ? (<div></div>):
                            (<MyTweets cardSentimentPositive = {this.state.cardSentimentPositive} cardSentimentNegative = {this.state.cardSentimentNegative} data = {this.state.data} insurance={this.state.insur} card={this.state.card}  col = "left"/>)
                        }
                    </Grid.Column>
                    <Grid.Column>
                          <h3>Insurance Related Messages</h3>
                          <Checkbox label="Neg" style={{marginRight:"10px"}} onChange={this.handleInsuranceSentimentPositive}></Checkbox>
                          <Checkbox label="Pos" onChange={this.handleInsuranceSentimentNegative}></Checkbox>
                            {
                              this.state.data.length === 0 ? (<div></div>):
                            (<MyTweets data = {this.state.data} insurancePositiveSentiment = {this.state.insuranceSentimentPositive} insuranceNegativeSentiment = {this.state.insuranceSentimentNegative} insurance={this.state.insur} card={this.state.card} col = "right"/>)
                            }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <h3>Card Related Landing Pages</h3>
                        {
                        this.state.data.length === 0 ? (<div></div>):
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "left"/>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Insurance Related Landing Pages</h3>
                        {
                        this.state.data.length === 0 ? (<div></div>):
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "right"/>
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{maxHeight:'5'}}>
                  {/* <h3>Insurance Images</h3> */}
                  <Grid.Column width = {16} style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>
                    {
                      this.state.data.length === 0?<div></div>:
                      <MyCarousel data = {this.state.data} card = {this.state.card}/>
                    }
                  </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
         );
    }
}

export default RenderComp;
