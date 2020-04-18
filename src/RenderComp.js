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
import { CSVDownload, CSVLink } from "react-csv";
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
         this.myCallbackForTweets = this.myCallbackForTweets.bind(this);
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
         
    }

    export()
    {
      var jsonObject = [];
      var cardData={};
      var withoutInsuranceData = {};
      if(this.state.card){
        //Populate for insurance card
      }else{
        //Populate for without insurance card
      }

      var masterObject ={
        twitter: this.state.selectedTwitterData.length > 0 ? this.state.selectedTwitterData : this.state.data.twitter,
        facebook: this.state.selectedFacebookData.length > 0 ? this.state.selectedFacebookData : this.state.data.facebook,
        insurance_dict: {...this.state.data.insurance_dict,
                            medication_list:this.state.selectedMedicationForInsurance.length > 0
                              ? this.state.selectedMedicationForInsurance : this.state.data.insurance_dict.medication_list,
                            tweets:this.state.selectedTweetsForInsurance.length > 0
                              ? this.state.selectedTweetsForInsurance : this.state.data.insurance_dict.tweets,
                            external_links:this.state.selectedExternalLinksForInsurance.length > 0
                              ? this.state.selectedExternalLinksForInsurance : this.state.data.insurance_dict.external_links
                            },
        without_insurance_dict:{...this.state.data.without_insurance_dict,
                            medication_list:this.state.selectedMedicationForWithoutInsurance.length > 0
                            ? this.state.selectedMedicationForWithoutInsurance : this.state.data.without_insurance_dict.medication_list,
                            tweets:this.state.selectedTweetsForWithoutInsurance.length  > 0
                            ? this.state.selectedTweetsForWithoutInsurance : this.state.data.without_insurance_dict.tweets,
                            external_links:this.state.selectedExternalLinksForWithoutInsurance.length > 0
                            ? this.state.selectedExternalLinksForWithoutInsurance : this.state.data.without_insurance_dict.external_links
        },
        card_dict: {...this.state.data.card_dict, 
                            medication_list:this.state.selectedMedicationForCard.length > 0
                            ? this.state.selectedMedicationForCard : this.state.data.card_dict.medication_list,
                            tweets:this.state.selectedTweetsForCard.length  > 0
                            ? this.state.selectedTweetsForCard : this.state.data.card_dict.tweets,
                            external_links:this.state.selectedExternalLinksForCard.length > 0
                            ? this.state.selectedExternalLinksForCard : this.state.data.card_dict.external_links
        }
      };

      // var maxiLength = 0 ; 
      // if(maxiLength < this.state.selectedTopicPhrase.length)
      // maxiLength = this.state.selectedTopicPhrase.length;

      // if(maxiLength < this.state.selectedTweets.length)
      // maxiLength = this.state.selectedTweets.length;

      // if(maxiLength < this.state.selectedFacebookData.length)
      // maxiLength = this.state.selectedFacebookData.length;

      // if(maxiLength < this.state.selectedTwitterData.length)
      // maxiLength = this.state.selectedTwitterData.length;

      // if(maxiLength < this.state.selectedMedication.length)
      // maxiLength = this.state.selectedMedication.length;

      // if(maxiLength < this.state.selectedFacebookLinks.length)
      // maxiLength = this.state.selectedFacebookLinks.length;

      // if(maxiLength < this.state.selectedTwitterLinks.length)
      // maxiLength = this.state.selectedTwitterLinks.length;

      // if(maxiLength < this.state.selectedMemes.length)
      // maxiLength = this.state.selectedMemes.length;

      // for(let item =  0 ; item<maxiLength; item++)
      // {
      //   var tempPhrase = "";
      //   var tempTweets = "";
      //   var tempFacebookData = "";
      //   var tempTwitterData = "";
      //   var tempMedication = "";
      //   var tempExternalLinks = "";
      //   var tempLandingPageTwitterLink = "";
      //   var tempMemes = "";

      //   if(item < this.state.selectedTopicPhrase.length)
      //   tempPhrase = this.state.selectedTopicPhrase[item];

      //   if(item < this.state.selectedTweets.length)
      //   tempTweets = this.state.selectedTweets[item];

      //   if(item < this.state.selectedFacebookData.length)
      //   tempFacebookData = this.state.selectedFacebookData[item];

      //   if(item < this.state.selectedTwitterData.length)
      //   tempTwitterData = this.state.selectedTwitterData[item];

      //   if(item < this.state.selectedMedication.length)
      //   tempMedication = this.state.selectedMedication[item];

      //   if(item < this.state.selectedFacebookLinks.length)
      //   tempExternalLinks = this.state.selectedFacebookLinks[item];

      //   if(item < this.state.selectedTwitterLinks.length)
      //   tempLandingPageTwitterLink = this.state.selectedTwitterLinks[item];

      //   if(item < this.state.selectedMemes.length)
      //   tempMemes = this.state.selectedMemes[item];

      //   jsonObject.push({
      //     id:item,
      //     Phrase:tempPhrase,
      //     Topic:this.state.myTopic,
      //     Tweets:tempTweets,
      //     FacebookID:tempFacebookData,
      //     TwitterID:tempTwitterData,
      //     Medication:tempMedication,
      //     ExternalLinks:tempExternalLinks,
      //     TwitterLinks:tempLandingPageTwitterLink,
      //     Memes:tempMemes,
      //   })
      // }

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
            selectedTwitterLinks:[], selectedMemes:[]
          });

          //Toggling Modal to close
          this.toggleExportModal()
        })
     })
    }

    toggleBrowseModal(){
      console.log("")
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
      console.log("insideOpenButton");
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
          console.log("Getting data = ")
          console.log(data)
          //Implement the display data
          this.setState({data:JSON.parse(data[0].data)},()=>{
              this.toggleBrowseModal()
          });
          // var dataURL = "data:application/json;charset=utf-8;," + encodeURIComponent(JSON.stringify(data));
          // var newWindow = window.open();
          // newWindow.document.write('<iframe src="' + dataURL  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
      })
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

    handleFileCheckBox(fileName){
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
              console.log("data = ")
              console.log(data);
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

    myCallbackForTweets(tweetsSelectedFromMyTweets)
    {
      console.log("inside myCallBack")
      // console.log(tweetsSelectedFromMyTweets)
      var temp = [];
      for(var i  = 0 ; i<this.state.selectedTweets.length;i++)
      {
        temp.push(this.state.selectedTweets[i]);
      }
      temp.push(tweetsSelectedFromMyTweets);
      this.setState({selectedTweets:temp});
      console.log(this.state.selectedTweets);
    }

    facebookAndTwitterCallback(facebookAndTwitterData){
      var temp=[];
      if(facebookAndTwitterData.type === "facebook"){
        for(var i  = 0 ; i<this.state.selectedFacebookData.length;i++)
        {
          temp.push(this.state.selectedFacebookData[i]);
        }
        temp.push(facebookAndTwitterData);
        this.setState({selectedFacebookData:temp});
      }else if(facebookAndTwitterData.type === "twitter"){
        for(var i  = 0 ; i<this.state.selectedTwitterData.length;i++)
        {
          temp.push(this.state.selectedTwitterData[i]);
        }
        temp.push(facebookAndTwitterData);
        this.setState({selectedTwitterData:temp});
      }
    }
    myCallbackForInsuranceMedication(medicationSelectedFromMyMedication)
    {
      var temp = [];
      if(this.state.selectedMedicationForInsurance != null)
      {
      for(let i = 0 ; i<this.state.selectedMedicationForInsurance.length ; i++)
        temp.push(this.state.selectedMedicationForInsurance[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForInsurance: temp});
    }
  }

    myCallbackForCardMedication(medicationSelectedFromMyMedication)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForCard.length ; i++)
        temp.push(this.state.selectedMedicationForCard[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForCard: temp});
    }
    myCallbackForWithoutInsuranceMedication(medicationSelectedFromMyMedication)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMedicationForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedMedicationForWithoutInsurance[i]);
      temp.push(medicationSelectedFromMyMedication);
      this.setState({selectedMedicationForWithoutInsurance: temp});

    }
    myCallbackForWithoutInsuranceTweets(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedTweetsForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForWithoutInsurance: temp});
    }
    myCallbackForInsuranceTweets(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForInsurance.length ; i++)
        temp.push(this.state.selectedTweetsForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForInsurance: temp});

    }
    myCallbackForCardTweets(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedTweetsForCard.length ; i++)
        temp.push(this.state.selectedTweetsForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedTweetsForCard: temp});
    }
    myCallbackForCardExternalLinks(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForCard.length ; i++)
        temp.push(this.state.selectedExternalLinksForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForCard: temp});
    }
    myCallbackForWithoutInsuranceExternalLinks(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedExternalLinksForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForWithoutInsurance: temp});
    }
    myCallbackForInsuranceExternalLinks(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedExternalLinksForInsurance.length ; i++)
        temp.push(this.state.selectedExternalLinksForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedExternalLinksForInsurance: temp});
    }
    myCallbackForInsuranceMemes(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForInsurance.length ; i++)
        temp.push(this.state.selectedMemesForInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForInsurance: temp});
    }
    myCallbackForCardMemes(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForCard.length ; i++)
        temp.push(this.state.selectedMemesForCard[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForCard: temp});
    }
    myCallbackForWithoutInsuranceMemes(rowFromChild)
    {
      var temp = [];
      for(let i = 0 ; i<this.state.selectedMemesForWithoutInsurance.length ; i++)
        temp.push(this.state.selectedMemesForWithoutInsurance[i]);
      temp.push(rowFromChild);
      this.setState({selectedMemesForWithoutInsurance: temp});
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
        console.log("phrase selected");
        console.log(this.state.selectedTopicPhrase);
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
              <Checkbox key={data[i][0]} style={{marginRight:'5px', display:'inline'}} onChange = {this.checkBoxSelected} value = {data[i][0]}/>{data[i++][0]}
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
                {/* <HeaderBar></HeaderBar> */}
                <div>
                {/* <h1 style={this.styleObj} >CleverRx</h1> */}
                {/* <h1 style={{color:'white'}}>CleverRx</h1> */}
        <Layout >

        <Header
          style={{
            textAlign: 'center',
            backgroundColor:'black'
          }}
        >
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
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "left"/>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <h3>Insurance Related Landing Pages</h3>
                        {
                        this.state.data.length === 0 ? (<div></div>):
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card} col = "right" myCallBack = {this.myCallbackForInsuranceExternalLinks}/>
                        }
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{maxHeight:'5'}}>
                  {/* <h3>Insurance Images</h3> */}
                  <Grid.Column width = {16} style={{position:'absolute', zIndex:'10',fontWeight: 'bold' }}>
                    {
                      this.state.data.length === 0?<div></div>:
                      <MyCarousel data = {this.state.data} card = {this.state.card} myCallback = {this.myCallbackForInsuranceMemes}/>
                    }
                  </Grid.Column>
                  </Grid.Row>
                </Grid>

            </div>
         );
    }
}

export default RenderComp;
