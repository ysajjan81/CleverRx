import React, { Component, ReactPropTypes } from 'react';
import TextContent from './TextContent';
import {Grid, Divider, Segment, GridColumn, Dropdown, Form , Button, Checkbox, Icon, Label, Modal, Image, Input, Radio } from 'semantic-ui-react';
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
// import json2csv from "json2csv";
// import { CSVDownload, CSVLink } from "react-csv";
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;
const loadingIcon = <Icon loading style={{ fontSize: 150, color:"black" }} name='spinner' />;
let current = '';
let prev = '';
let numberofCheckBoxSelected = 0;
var obj = {};
var exportData = [];
let A = [];
let isxport = false;
var topicOptions = [
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
    {
    key:'insurance',
    text: 'Insurance',
    value: 'insurance',
  },
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
            insuranceSentimentPositive:true,
            insuranceSentimentNegative:true,
            cardSentimentPositive:true,
            cardSentimentNegative:true,
            firsLoad:true,
            exportData:[],
            selectedTopicPhrase:[],
            selectedTweets:[],
            selectedTweetsForInsurance:[],
            selectedTweetsForWithoutInsurance:[],
            selectedTweetsForCard:[],
            selectedMedicationForInsurance:[],
            selectedMedicationForWithoutInsurance:[],
            selectedMedicationForCard:[],
            selectedExternalLinksForWithoutInsurance:[],
            selectedExternalLinksForInsurance:[],
            selectedExternalLinksForCard:[],
            selectedTwitterLinksForInsurance:[],
            selectedTwitterLinksForCard:[],
            selectedTwitterLinksForWithoutInsurance:[],
            selectedMemesForCard:[],
            selectedMemesForInsurance:[],
            selectedMemesForWithoutInsurance:[],
            selectedFacebookData:[],
            selectedTwitterData:[],
            dataToExport: [],
            selectedFacebookLinks:[],
            selectedTwitterLinks:[],
            selectedMedication:[],
            selectedMemes:[],
            showExportModal:false,
            showBrowseModal:false,
            inputFileName:"",
            listOfFiles:[],
            selectedFileNameToOpen:""
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
        //  this.myCallbackForTweets = this.myCallbackForTweets.bind(this);
         this.facebookAndTwitterCallback = this.facebookAndTwitterCallback.bind(this);
        //  this.myCallbackForMedication = this.myCallbackForMedication.bind(this);
         this.export = this.export.bind(this);
        //  this.myCallbackForMedication = this.myCallbackForMedication.bind(this);
         this.handleFileNameChange = this.handleFileNameChange.bind(this);
         this.toggleExportModal = this.toggleExportModal.bind(this);
         this.toggleBrowseModal = this.toggleBrowseModal.bind(this);
         this.handleOpenButton = this.handleOpenButton.bind(this);
         this.myCallbackForInsuranceMedication = this.myCallbackForInsuranceMedication.bind(this);
         this.myCallbackForCardMedication = this.myCallbackForCardMedication.bind(this);
         this.myCallbackForWithoutInsuranceMedication = this.myCallbackForWithoutInsuranceMedication.bind(this);
         this.myCallbackForWithoutInsuranceTweets = this.myCallbackForWithoutInsuranceTweets.bind(this);
         this.myCallbackForInsuranceTweets = this.myCallbackForInsuranceTweets.bind(this);
         this.myCallbackForCardTweets = this.myCallbackForCardTweets.bind(this);
         this.myCallbackForCardExternalLinks = this.myCallbackForCardExternalLinks.bind(this);
         this.myCallbackForWithoutInsuranceExternalLinks = this.myCallbackForWithoutInsuranceExternalLinks.bind(this);
         this.myCallbackForInsuranceExternalLinks = this.myCallbackForInsuranceExternalLinks.bind(this);
         this.myCallbackForInsuranceMemes = this.myCallbackForInsuranceMemes.bind(this);
         this.myCallbackForCardMemes = this.myCallbackForCardMemes.bind(this);
         this.myCallbackForWithoutInsuranceMemes = this.myCallbackForWithoutInsuranceMemes.bind(this);
         this.cardCustomerCallbackForExternalLinks = this.cardCustomerCallbackForExternalLinks.bind(this);
         this.cardCustomerCallbackForTwitterLinks = this.cardCustomerCallbackForTwitterLinks.bind(this);
         this.myCallbackForCardTwitterLinks = this.myCallbackForCardTwitterLinks.bind(this);
         this.myCallbackForInsuranceTwitterLinks = this.myCallbackForInsuranceTwitterLinks.bind(this);
         this.myCallbackForWithoutInsuranceTwitterLinks = this.myCallbackForWithoutInsuranceTwitterLinks.bind(this);
         this.myCallbackForCardCustomerMemes = this.myCallbackForCardCustomerMemes.bind(this);
    }

    export()
    {
      var masterObject ={
        phrase: this.state.selectedTopicPhrase.length > 0 ? this.state.selectedTopicPhrase : {},
        twitter: this.state.selectedTwitterData.length > 0 ? this.state.selectedTwitterData : {},
        facebook: this.state.selectedFacebookData.length > 0 ? this.state.selectedFacebookData : {},
        insurance_dict: {...this.state.data.insurance_dict,
                            medication_list:this.state.selectedMedicationForInsurance.length > 0
                              ? this.state.selectedMedicationForInsurance : {},
                            tweets:this.state.selectedTweetsForInsurance.length > 0
                              ? this.state.selectedTweetsForInsurance : {},
                            external_links:this.state.selectedExternalLinksForInsurance.length > 0
                              ? this.state.selectedExternalLinksForInsurance : {},
                            twitter_links:this.state.selectedTwitterLinksForInsurance.length > 0 
                              ? this.state.selectedTwitterLinksForInsurance : {},
                            tid:this.state.selectedMemesForInsurance.length > 0 ? this.state.selectedMemesForInsurance : {}
                            },
        without_insurance_dict:{...this.state.data.without_insurance_dict,
                            medication_list:this.state.selectedMedicationForWithoutInsurance.length > 0
                            ? this.state.selectedMedicationForWithoutInsurance : {},
                            tweets:this.state.selectedTweetsForWithoutInsurance.length  > 0
                            ? this.state.selectedTweetsForWithoutInsurance : {},
                            external_links:this.state.selectedExternalLinksForWithoutInsurance.length > 0
                            ? this.state.selectedExternalLinksForWithoutInsurance : {},
                            twitter_links:this.state.selectedTwitterLinksForWithoutInsurance.length > 0 
                              ? this.state.selectedTwitterLinksForWithoutInsurance : {},
                            tid:this.state.selectedMemesForWithoutInsurance.length > 0 ? this.state.selectedMemesForWithoutInsurance : {}
                            },
        card_dict: {...this.state.data.card_dict, 
                            medication_list:this.state.selectedMedicationForCard.length > 0
                            ? this.state.selectedMedicationForCard : {},
                            tweets:this.state.selectedTweetsForCard.length  > 0
                            ? this.state.selectedTweetsForCard : {},
                            external_links:this.state.selectedExternalLinksForCard.length > 0
                            ? this.state.selectedExternalLinksForCard : {},
                            twitter_links:this.state.selectedTwitterLinksForCard.length > 0 
                              ? this.state.selectedTwitterLinksForCard : {},
                            tid:this.state.selectedMemesForCard.length > 0 ? this.state.selectedMemesForCard : {}
                          }
      };



      this.setState({ dataToExport: masterObject }, () => {
        const url = '/add_files'

        const formData = new URLSearchParams();

        formData.append("data", JSON.stringify(masterObject))
        formData.append("file_name", this.state.inputFileName)
        fetch(url, {
          method: 'POST',
          body:formData
        }).then((response) => {
          if(response.status == 200)
            {
              return response;
            }
          else {
            alert('Uh Oh! Something went wrong');
            return -1;
          }
        }).then((data) => {
          if(data == -1)
            return;
          //Reset the state values
          this.setState({selectedTopicPhrase:[], selectedMedication:[], selectedFacebookData:[],
            selectedTwitterData:[],selectedMedication:[],selectedFacebookLinks:[],
            selectedTwitterLinks:[], selectedMemes:[], selectedTweetsForInsurance:[],selectedTweetsForWithoutInsurance:[],selectedTweetsForCard:[], selectedMedicationForCard:[], selectedMedicationForInsurance:[], selectedMedicationForWithoutInsurance:[], selectedTopicPhrase:[], selectedExternalLinksForCard:[], selectedExternalLinksForInsurance:[], selectedExternalLinksForWithoutInsurance:[], selectedTwitterLinksForCard:[], selectedTwitterLinksForInsurance:[], selectedTwitterLinksForWithoutInsurance:[], selectedMemesForCard:[], selectedMemesForInsurance:[], selectedMemesForWithoutInsurance:[]
          });

          //Toggling Modal to close
          this.toggleExportModal()
        })
     })
    }

    toggleBrowseModal(){
    
      var url = '/get_files'
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
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

        var fileNames=[];
        for(var i=0;i<data.length;i++)
        {
          fileNames.push(data[i].file_name)
        }
        this.setState({listOfFiles:fileNames},()=>{
          this.setState({ showBrowseModal: !this.state.showBrowseModal})
        })
      })
    }

    toggleExportModal(){
      this.setState({ showExportModal: !this.state.showExportModal})
    }

    handleOpenButton(){
      if(this.state.selectedFileNameToOpen && this.state.selectedFileNameToOpen !== ""){
        var url = '/get_file_data?file_name='+this.state.selectedFileNameToOpen
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          }
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
            //Implement the display data
            // this.setState({cloudData:JSON.parse(data[0].data.phrase)});
            this.setState({data:JSON.parse(data[0].data)},()=>{
                this.toggleBrowseModal()
            });

            this.setState({cloudData:this.state.data.phrase});

            // var dataURL = "data:application/json;charset=utf-8;," + encodeURIComponent(JSON.stringify(data));
            // var newWindow = window.open();
            // newWindow.document.write('<iframe src="' + dataURL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');

        })
      }
    }
    handleCardSentimentPositive()
    {
      if(this.state.cardSentimentPositive == true)
      this.setState({cardSentimentPositive: false});
      else
      this.setState({cardSentimentPositive: true});
    }
    handleCardSentimentNegative()
    {
      if(this.state.cardSentimentNegative == true)
      this.setState({cardSentimentNegative: false});
      else
      this.setState({cardSentimentNegative: true});
    }

    handleInsuranceSentimentPositive()
    {
      if(this.state.insuranceSentimentPositive == true)
      this.setState({insuranceSentimentPositive: false});
      else
      this.setState({insuranceSentimentPositive: true});
    }
    handleInsuranceSentimentNegative()
    {
      if(this.state.insuranceSentimentNegative == true)
      this.setState({insuranceSentimentNegative: false})
      else
      this.setState({insuranceSentimentNegative: true})
    }
    handleFileNameChange(event){
      this.setState({ inputFileName:event.target.value })
    }

    handleFileCheckBox(fileName)
    {
      this.setState({ selectedFileNameToOpen : fileName})
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

    facebookAndTwitterCallback(facebookAndTwitterData)
    {
      if(facebookAndTwitterData.type === "facebook" )
      {
        if(this.state.selectedFacebookData != null && this.state.selectedFacebookData.includes(facebookAndTwitterData) == false)
        {
        var temp=[];
        for(var i  = 0 ; i<this.state.selectedFacebookData.length;i++)
        {
          temp.push(this.state.selectedFacebookData[i]);
        }
        temp.push(facebookAndTwitterData);
        this.setState({selectedFacebookData:temp});
      }
      else if(this.state.selectedFacebookData != null && this.state.selectedFacebookData.includes(facebookAndTwitterData) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedFacebookData.length ; i++)
        {
          if(this.state.selectedFacebookData[i] == facebookAndTwitterData)
          continue;
          temp.push(this.state.selectedFacebookData[i]);
        }
        this.setState({selectedFacebookData:temp});
      }

      }
      else if(facebookAndTwitterData.type === "twitter")
      {
        if(this.state.selectedTwitterData != null && this.state.selectedTwitterData.includes(facebookAndTwitterData) == false)
        {
          var temp = [];
        for(var i  = 0 ; i<this.state.selectedTwitterData.length;i++)
        {
          temp.push(this.state.selectedTwitterData[i]);
        }
        temp.push(facebookAndTwitterData);
        this.setState({selectedTwitterData:temp});
      }
      else if(this.state.selectedTwitterData != null && this.state.selectedTwitterData.includes(facebookAndTwitterData) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTwitterData.length ; i++)
        {
          if(this.state.selectedTwitterData[i] == facebookAndTwitterData)
          continue;
          temp.push(this.state.selectedTwitterData[i]);
        }
        this.setState({selectedTwitterData:temp});
      }
      }
    }
    // facebookAndTwitterCallback(facebookAndTwitterData)
    // {
    //   var temp=[];
    //   if(facebookAndTwitterData.type === "facebook"){
    //     for(var i  = 0 ; i<this.state.selectedFacebookData.length;i++)
    //     {
    //       temp.push(this.state.selectedFacebookData[i]);
    //     }
    //     temp.push(facebookAndTwitterData);
    //     this.setState({selectedFacebookData:temp});
    //   }else if(facebookAndTwitterData.type === "twitter"){
    //     for(var i  = 0 ; i<this.state.selectedTwitterData.length;i++)
    //     {
    //       temp.push(this.state.selectedTwitterData[i]);
    //     }
    //     temp.push(facebookAndTwitterData);
    //     this.setState({selectedTwitterData:temp});
    //   }
    // }
    myCallbackForInsuranceMedication(medicationSelectedFromMyMedication)
    {
      if(this.state.selectedMedicationForInsurance != null && this.state.selectedMedicationForInsurance.includes(medicationSelectedFromMyMedication) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForInsurance.length ; i++)
        temp.push(this.state.selectedMedicationForInsurance[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForInsurance: temp});
      }
    else if(this.state.selectedMedicationForInsurance != null && this.state.selectedMedicationForInsurance.includes(medicationSelectedFromMyMedication) == true)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForInsurance.length ; i++)
      {
        if(this.state.selectedMedicationForInsurance[i] == medicationSelectedFromMyMedication)
        continue;
        temp.push(this.state.selectedMedicationForInsurance[i]);
      }
      this.setState({selectedMedicationForInsurance:temp});
    }
  }

    myCallbackForCardMedication(medicationSelectedFromMyMedication)
    {
      if(this.state.selectedMedicationForCard != null && this.state.selectedMedicationForCard.includes(medicationSelectedFromMyMedication) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForCard.length ; i++)
        temp.push(this.state.selectedMedicationForCard[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForCard: temp});
      }
      else if(this.state.selectedMedicationForCard != null && this.state.selectedMedicationForCard.includes(medicationSelectedFromMyMedication) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedMedicationForCard.length ; i++)
        {
          if(this.state.selectedMedicationForCard[i] == medicationSelectedFromMyMedication)
          continue;
          temp.push(this.state.selectedMedicationForCard[i]);
        }
        this.setState({selectedMedicationForCard:temp});
      }
    }
    myCallbackForWithoutInsuranceMedication(medicationSelectedFromMyMedication)
    {
      if(this.state.selectedMedicationForWithoutInsurance != null && this.state.selectedMedicationForWithoutInsurance.includes(medicationSelectedFromMyMedication) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedMedicationForWithoutInsurance[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForWithoutInsurance: temp});
      }

      else if(this.state.selectedMedicationForWithoutInsurance != null && this.state.selectedMedicationForWithoutInsurance.includes(medicationSelectedFromMyMedication) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedMedicationForWithoutInsurance.length ; i++)
        {
          if(this.state.selectedMedicationForWithoutInsurance[i] == medicationSelectedFromMyMedication)
          continue;
          temp.push(this.state.selectedMedicationForWithoutInsurance[i]);
        }
        this.setState({selectedMedicationForWithoutInsurance:temp});
      }
    }

    myCallbackForWithoutInsuranceTweets(rowFromChild)
    {
      if(this.state.selectedTweetsForWithoutInsurance != null && this.state.selectedTweetsForWithoutInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedTweetsForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForWithoutInsurance: temp});
      }
      else if(this.state.selectedTweetsForWithoutInsurance != null && this.state.selectedTweetsForWithoutInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTweetsForWithoutInsurance.length ; i++)
        {
          if(this.state.selectedTweetsForWithoutInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTweetsForWithoutInsurance[i]);
        }
        this.setState({selectedTweetsForWithoutInsurance:temp});
      }

    }
    myCallbackForInsuranceTweets(rowFromChild)
    {
      if(this.state.selectedTweetsForInsurance != null && this.state.selectedTweetsForInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForInsurance.length ; i++)
        temp.push(this.state.selectedTweetsForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForInsurance: temp});
      }
      else if(this.state.selectedTweetsForInsurance != null && this.state.selectedTweetsForInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTweetsForInsurance.length ; i++)
        {
          if(this.state.selectedTweetsForInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTweetsForInsurance[i]);
        }
        this.setState({selectedTweetsForInsurance:temp});
      }
    }

    myCallbackForCardTweets(rowFromChild)
    {
      //if not present in list then add 
      if(this.state.selectedTweetsForCard != null && this.state.selectedTweetsForCard.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForCard.length ; i++)
        temp.push(this.state.selectedTweetsForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForCard: temp});
      }
      // if present in list remove.
      else if(this.state.selectedTweetsForCard != null && this.state.selectedTweetsForCard.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTweetsForCard.length ; i++)
        {
          if(this.state.selectedTweetsForCard[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTweetsForCard[i]);
        }
        this.setState({selectedTweetsForCard:temp});
      }
    }
    myCallbackForCardExternalLinks(rowFromChild)
    {
      if(this.state.selectedExternalLinksForCard != null && this.state.selectedExternalLinksForCard.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForCard.length ; i++)
        temp.push(this.state.selectedExternalLinksForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForCard: temp});
      }
      else if(this.state.selectedExternalLinksForCard != null && this.state.selectedExternalLinksForCard.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedExternalLinksForCard.length ; i++)
        {
          if(this.state.selectedExternalLinksForCard[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedExternalLinksForCard[i]);
        }
        this.setState({selectedExternalLinksForCard:temp});
      }
    }
    myCallbackForWithoutInsuranceExternalLinks(rowFromChild)
    {
      if(this.state.selectedExternalLinksForWithoutInsurance != null && this.state.selectedExternalLinksForWithoutInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedExternalLinksForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForWithoutInsurance: temp});
      }
      else if(this.state.selectedExternalLinksForWithoutInsurance != null && this.state.selectedExternalLinksForWithoutInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedExternalLinksForWithoutInsurance.length ; i++)
        {
          if(this.state.selectedExternalLinksForWithoutInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedExternalLinksForWithoutInsurance[i]);
        }
        this.setState({selectedExternalLinksForWithoutInsurance:temp});
      }
    }
    myCallbackForInsuranceExternalLinks(rowFromChild)
    {
      if(this.state.selectedExternalLinksForInsurance != null && this.state.selectedExternalLinksForInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForInsurance.length ; i++)
        temp.push(this.state.selectedExternalLinksForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForInsurance: temp});
      }
      else if(this.state.selectedExternalLinksForInsurance != null && this.state.selectedExternalLinksForInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedExternalLinksForInsurance.length ; i++)
        {
          if(this.state.selectedExternalLinksForInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedExternalLinksForInsurance[i]);
        }
        this.setState({selectedExternalLinksForInsurance:temp});
      }
    }
    myCallbackForInsuranceMemes(rowFromChild)
    {
      if(this.state.selectedMemesForInsurance != null && this.state.selectedMemesForInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForInsurance.length ; i++)
        temp.push(this.state.selectedMemesForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForInsurance: temp});
      }
      else if(this.state.selectedMemesForInsurance != null && this.state.selectedMemesForInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedMemesForInsurance.length ; i++)
        {
          if(this.state.selectedMemesForInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedMemesForInsurance[i]);
        }
        this.setState({selectedMemesForInsurance:temp});
      }
 
    }
    myCallbackForCardMemes(rowFromChild)
    {
      if(this.state.selectedMemesForCard != null && this.state.selectedMemesForCard.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForCard.length ; i++)
        temp.push(this.state.selectedMemesForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForCard: temp});
      }
      else if(this.state.selectedMemesForCard != null && this.state.selectedMemesForCard.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedMemesForCard.length ; i++)
        {
          if(this.state.selectedMemesForCard[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedMemesForCard[i]);
        }
        this.setState({selectedMemesForCard:temp});
      }
    }
    myCallbackForWithoutInsuranceMemes(rowFromChild)
    {
      if(this.state.selectedMemesForWithoutInsurance != null && this.state.selectedMemesForWithoutInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedMemesForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForWithoutInsurance: temp});
      }
      else if(this.state.selectedMemesForWithoutInsurance != null && this.state.selectedMemesForWithoutInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedMemesForWithoutInsurance.length ; i++)
        {
          if(this.state.selectedMemesForWithoutInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedMemesForWithoutInsurance[i]);
        }
        this.setState({selectedMemesForWithoutInsurance:temp});
      }
    }
    myCallbackForCardCustomerMemes(rowFromChild)
    {
      if(this.state.card == true)
      this.myCallbackForCardMemes(rowFromChild);
      else 
      this.myCallbackForWithoutInsuranceMemes(rowFromChild);
    }
    cardCustomerCallbackForExternalLinks(rowFromChild)
    {
      if(this.state.card == true)
      this.myCallbackForCardExternalLinks(rowFromChild);
      else 
      this.myCallbackForWithoutInsuranceExternalLinks(rowFromChild);
    }
    myCallbackForCardTwitterLinks(rowFromChild)
    {
      if(this.state.selectedTwitterLinksForCard != null && this.state.selectedTwitterLinksForCard.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTwitterLinksForCard.length ; i++)
        temp.push(this.state.selectedTwitterLinksForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedTwitterLinksForCard: temp});
      }
      else if(this.state.selectedTwitterLinksForCard != null && this.state.selectedTwitterLinksForCard.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTwitterLinksForCard.length ; i++)
        {
          if(this.state.selectedTwitterLinksForCard[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTwitterLinksForCard[i]);
        }
        this.setState({selectedTwitterLinksForCard:temp});
      }
    }
    myCallbackForInsuranceTwitterLinks(rowFromChild)
    {
      if(this.state.selectedTwitterLinksForInsurance != null && this.state.selectedTwitterLinksForInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTwitterLinksForInsurance.length ; i++)
        temp.push(this.state.selectedTwitterLinksForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTwitterLinksForInsurance: temp});
      }
      else if(this.state.selectedTwitterLinksForInsurance != null && this.state.selectedTwitterLinksForInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTwitterLinksForInsurance.length ; i++)
        {
          if(this.state.selectedTwitterLinksForInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTwitterLinksForInsurance[i]);
        }
        this.setState({selectedTwitterLinksForInsurance:temp});
      }
    }
    myCallbackForWithoutInsuranceTwitterLinks(rowFromChild)
    {
      if(this.state.selectedTwitterLinksForWithoutInsurance != null && this.state.selectedTwitterLinksForWithoutInsurance.includes(rowFromChild) == false)
      {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTwitterLinksForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedTwitterLinksForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTwitterLinksForWithoutInsurance: temp});
      }
      else if(this.state.selectedTwitterLinksForWithoutInsurance != null && this.state.selectedTwitterLinksForWithoutInsurance.includes(rowFromChild) == true)
      {
        var temp = [];
        for(let i = 0 ; i<this.state.selectedTwitterLinksForWithoutInsurance.length ; i++)
        {
          if(this.state.selectedTwitterLinksForWithoutInsurance[i] == rowFromChild)
          continue;
          temp.push(this.state.selectedTselectedTwitterLinksForWithoutInsuranceweetsForCard[i]);
        }
        this.setState({selectedTwitterLinksForWithoutInsurance:temp});
      }
    }
    cardCustomerCallbackForTwitterLinks(rowFromChild)
    {

      if(this.state.card == true)
      this.myCallbackForCardTwitterLinks(rowFromChild);
      else 
      this.myCallbackForWithoutInsuranceTwitterLinks(rowFromChild);
    }
    checkBoxSelected = (event, {value}) =>
    {
        var temp = [] ;
        var isPresent = false;
        for(let i = 0 ; i<this.state.selectedTopicPhrase.length ; i++)
        {
          if(value == this.state.selectedTopicPhrase[i])
           {
            isPresent = true;
            numberofCheckBoxSelected -= 1;
            break;
           }
        }
        if(isPresent == false)
        {
          numberofCheckBoxSelected += 1;
          temp = this.state.selectedTopicPhrase;
          temp.push(value);
          this.setState({selectedTopicPhrase: temp});
        }
        else
        {
          for(let i = 0 ; i<this.state.selectedTopicPhrase.length ; i++)
          {
            if(this.state.selectedTopicPhrase[i] == value)
            {
              continue;
            }
            temp.push(this.state.selectedTopicPhrase[i]);
          }
          this.setState({selectedTopicPhrase: temp});
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
      for(let i = 0 ; i<this.state.selectedTopicPhrase.length; i++)
      {
        temp += this.state.selectedTopicPhrase[i] + ',';
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
        var temp = [];
        if(this.state.data.phrase == null)
        {
        for(let i = 0 ; i<phrase.length ; i++)
        {
          if(phrase[i].Topic === this.state.myTopic)
          {
            temp.push(phrase[i].Phrase);
            myoptions.push({key: phrase[i].Phrase, text: phrase[i].Phrase, value: phrase[i].Phrase});
          }
        }
        this.setState({cloudData: temp});
        this.setState({phraseSelected: myoptions})
      }


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
              <Checkbox key={data.length} style={{marginRight:'5px', display:'inline'}} onChange = {this.checkBoxSelected} value = {data[i]}/>{data[i++]}
              </TableCell>
            </TableRow>)
            }
            else if( data.length - i == 2)
            {
              l.push(<TableRow>
                <TableCell><Checkbox key={data.length} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i]} />{data[i++]}</TableCell>
                <TableCell ><Checkbox key={data.length} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i]}/>{data[i++]}</TableCell>
            </TableRow>)
            }
            else if(data.length - i >= 3)
              {
                  l.push(<TableRow>
                <TableCell><Checkbox key={data.length} style={{marginRight:'5px'}}  onChange = {this.checkBoxSelected} value = {data[i]}/>{data[i++]}</TableCell>
                <TableCell ><Checkbox key={data.length} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i]}/>{data[i++]}</TableCell>
                <TableCell ><Checkbox key={data.length} style={{marginRight:'5px'}} onChange = {this.checkBoxSelected} value = {data[i]}/>{data[i++]}</TableCell>
            </TableRow>)
              }
        }
      }
    }
        const {img} = this.state
        return (

            <div>
                <div>
                {/* <HeaderBar></HeaderBar> */}
                <div>
                {/* <h1 style={this.styleObj} >CleverRx</h1> */}
                {/* <h1 style={{color:'white'}}>CleverRx</h1> */}
        <Layout >

        <Header
          style={{
            textAlign: 'center',
            backgroundColor:'black'
          }}>
          <div class="headerTitle" style={{display:'inline-block'}}>
            <h1 style={{color:"white", fontSize:50}}><b>CleverRx</b></h1>
          </div>
          <div class="headerButtons" style={{display:'inline-block', float:'right', marginTop:'2px'}}>
            <Modal open={this.state.showExportModal} scrollable style={{background:'unset', boxShadow:'unset', width:'25%', marginTop:'5%'}} trigger={<Button style={{marginTop:'10px', color:'black', backgroundColor:'#66ff00'}} onClick={this.toggleExportModal}>Save Ad</Button>}>
              <Modal.Header>
                <div className="closeBtn" onClick={this.toggleExportModal} style={{fontWeight: 900, float: 'right', color: '#8c151f', cursor:'pointer'}}>x</div>
                Save Ad
              </Modal.Header>
              <Modal.Content>
                <Modal.Description style={{textAlign:'center'}}>
                  <div class="ui focus input">
                    <Input placeholder="Enter the file Name..." onChange={this.handleFileNameChange} /></div>
                    <Button style={{marginLeft:'10px'}} primary onClick={this.export}>
                      Save <Icon style={{marginLeft:'2px'}} name='upload' />
                    </Button>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            <Modal open={this.state.showBrowseModal} scrollable style={{background:'unset', boxShadow:'unset', width:'25%', marginTop:'5%'}}  trigger={<Button style={{marginTop:'10px', color:'black', backgroundColor:'#66ff00'}} onClick={this.toggleBrowseModal}>Browse Ads</Button>}>
            <Modal.Header>
              <div className="closeBtn" onClick={this.toggleBrowseModal} style={{fontWeight: 900, float: 'right', color: '#8c151f', cursor:'pointer'}}>x</div>
              Browse Files
              </Modal.Header>
            <Modal.Content scrolling>
              <Modal.Description>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{fontSize:'20px', color:'black'}}>Filename</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      this.state.listOfFiles.map((data) =>{
                        return(
                          <TableRow style={{height:'unset !important'}}>
                            <TableCell>{data}</TableCell>
                            {/* <TableCell><Checkbox onClick={()=>this.handleFileCheckBox(data)}/></TableCell> */}
                            <TableCell><input type="radio" name="file" value="" onClick={()=>this.handleFileCheckBox(data)}></input></TableCell>
                          </TableRow>
                        )
                      })
                    }
                  </TableBody>
                </Table>
                <div style={{ marginTop:'10px', textAlign:'center'}}><Button primary onClick={this.handleOpenButton}>Open</Button></div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
          </div>
        </Header>

       </Layout>
        </div>
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
                                {/* <Button style={{marginTop:'10px', color:'black'}} onClick={()=>this.export(true)}>Export Data</Button>
                                <Button style={{marginTop:'10px', color:'black'}} onClick={()=>this.export(false)}>Show Data</Button> */}
                  <div>
                    {/* <CSVLink data={this.state.dataToDownload} filename="data.csv" className="hidden" 
                    ref={(r) => this.csvLink = r} target="_blank"/> */}
                 </div>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                              <FacebookAndTwitter data = {this.state.data} populateSelectedData={this.facebookAndTwitterCallback}/>
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
                      <Checkbox key={this.state.myTopic} label="Card/Customer" style = {checkBoxStyle} onChange={this.cardSelected}></Checkbox>
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
                         <div style={{zIndex:'10',fontWeight: 'bold' }}>Card</div>
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><MyCloud data={this.state.data.card_dict.card_list}/></div>
                            )
                          }
                        </Segment>
                        <Segment>
                        {/* <div style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>Medication</div> */}
                        {
                          this.state.data.length == 0 ? (
                               <div style={{'width':'5px'}}></div>
                             ) : (
                               <div ><Medication data = {this.state.data.card_dict.medication_list} callbackformedication={this.myCallbackForCardMedication}/></div>
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
                               <div ><Medication data = {this.state.data.without_insurance_dict.medication_list} callbackformedication={this.myCallbackForWithoutInsuranceMedication}/></div>
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
                               <div><Medication data = {this.state.data.insurance_dict.medication_list} callbackformedication={this.myCallbackForInsuranceMedication} /></div>
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
                        {/* {
                        this.state.data.length === 0 ? (<div></div>):
                            (<MyTweets cardSentimentPositive = {this.state.cardSentimentPositive} cardSentimentNegative = {this.state.cardSentimentNegative} data = {this.state.data} insurance={this.state.insur} card={this.state.card}  col = "left" callbackFromParent={this.myCallbackForTweets}  />)
                        } */}
                        {
                        this.state.data.length != 0 && this.state.card == true?(<MyTweets cardSentimentPositive = {this.state.cardSentimentPositive} cardSentimentNegative = {this.state.cardSentimentNegative} data = {this.state.data} insurance={this.state.insur} card={this.state.card}  col = "left" callbackFromParent={this.myCallbackForCardTweets}  />) : (<div></div>)
                        }
                        {
                        this.state.data.length != 0 && this.state.card == false? (<MyTweets cardSentimentPositive = {this.state.cardSentimentPositive} cardSentimentNegative = {this.state.cardSentimentNegative} data = {this.state.data} insurance={this.state.insur} card={this.state.card}  col = "left" callbackFromParent={this.myCallbackForWithoutInsuranceTweets}  />) : (<div></div>)
                        }
                      
                      {/* { isxport == false?(<div></div>):
                      <CSVLink data={A}>Download me</CSVLink>
                      // <CSVDownload data={A} target="_blank" />
                      } */}
                    </Grid.Column>
                    <Grid.Column>
                          <h3>Insurance Related Messages</h3>
                          <Checkbox label="Neg" style={{marginRight:"10px"}} onChange={this.handleInsuranceSentimentPositive}></Checkbox>
                          <Checkbox label="Pos" onChange={this.handleInsuranceSentimentNegative}></Checkbox>
                            {
                              this.state.data.length === 0 ? (<div></div>):
                            (<MyTweets data = {this.state.data} insurancePositiveSentiment = {this.state.insuranceSentimentPositive} insuranceNegativeSentiment = {this.state.insuranceSentimentNegative} insurance={this.state.insur} card={this.state.card} col = "right"  callbackFromParent={this.myCallbackForInsuranceTweets}  />)
                            }
                      {/* { isxport == false?(<div></div>):
                      <CSVLink data={A}>Download me</CSVLink>
                      // <CSVDownload data={A} target="_blank" />
                      } */}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <h3>Card Related Landing Pages</h3>
                        {
                        this.state.data.length === 0 ? (<div></div>):
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "left" myCallBack =  {this.cardCustomerCallbackForExternalLinks} myCallBackForTwitterLinks = {this.cardCustomerCallbackForTwitterLinks}/>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Insurance Related Landing Pages</h3>
                        {
                        this.state.data.length === 0 ? (<div></div>):
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "right" myCallBack = {this.myCallbackForInsuranceExternalLinks} InsuranceTwitterLinks = {this.myCallbackForInsuranceTwitterLinks}/>
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{maxHeight:'5'}}>
                  {/* <h3>Insurance Images</h3> */}
                  <Grid.Column width = {16} style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>
                    {
                      this.state.data.length === 0?<div></div>:
                      <MyCarousel data = {this.state.data} card = {this.state.card} propsForCardCustomer = {this.myCallbackForCardCustomerMemes} propsForInsurance ={this.myCallbackForInsuranceMemes}/>
                    }
                  </Grid.Column>
                  </Grid.Row>
                </Grid>
            </div>
         );
    }
}

export default RenderComp;
