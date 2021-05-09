import React, { useEffect, useState } from 'react';
import "./index.css"
import {
  ChakraProvider,
  Container,
  Box,
} from "@chakra-ui/react"
import axios from 'axios';
import InputBox from './components/InputBox';
import AddCurrency from './components/AddCurrency'
import SelectCurrency from './components/SelectCurrency'
import BoxER from './components/BoxER'


const App = () => {
  const [exc, setExc] = useState([])
  const [inputUSD, setInputUSD] = useState(10.00)
  const [selectedOptions, setSelectedOptions] = useState("")
  const [listCurr, setListCurr] = useState([])
  const [showAddCurr, setShowAddCurr] = useState(true)
  const [showSelectCurr, setShowSelectCurr] = useState(false)

  const currencyOptions = ["IDR", "EUR", "GBP", "SGD", "USD", "CAD", "CHF", "INR", "MYR", "JPY", "KRW"]
  const prec = (num) => {
    return (Math.round(num*10000)/10000)
  }

  useEffect(()=>{
    axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=a936c28a2ca8c5d7696d25b20a7ad467')
      .then(res => {
        const exchanges = (res.data.rates);
        setExc(exchanges);
        setListCurr([
          {
            nameER: "Indonesian Rupiah",
            codeER: "IDR",
            excER: prec(exchanges.IDR/exchanges.USD),
            flagER: "ID",
            countER: prec(exchanges.IDR*inputUSD/exchanges.USD)
          },
          {
            nameER: "Euro",
            codeER: "EUR",
            excER: prec(exchanges.EUR/exchanges.USD),
            flagER: "EU",
            countER: prec(exchanges.EUR*inputUSD/exchanges.USD)
          },
          {
            nameER: "British Pound",
            codeER: "GBP",
            excER: prec(exchanges.GBP/exchanges.USD),
            flagER: "GB-UKM",
            countER: prec(exchanges.GBP*inputUSD/exchanges.USD)
          },
          {
            nameER: "Singapore Dollar",
            codeER: "SGD",
            excER: prec(exchanges.SGD/exchanges.USD),
            flagER: "SG",
            countER: prec(exchanges.SGD*inputUSD/exchanges.USD)
          }
        ])
      })
  }, []);

  const handleDeleteCurrencyAtIndex = (index) => {
    setListCurr(listCurr.filter((el, idx) => idx !== index))
  }

  const handleChangeAmount = (usd) => {
    setInputUSD(usd)
    setListCurr(
      listCurr.map((row) => {
        return{
          nameER: row.nameER,
          codeER: row.codeER,
          excER: prec(row.excER),
          flagER: row.flagER,
          countER: prec(row.excER*usd)
        }
      })
    )
  }
  
  const handleAddCurrency = () => {
    setShowAddCurr(false)
    setShowSelectCurr(true)
  }

  const handleSelectCurrency = (selectedOptions) => {
    var newData;
    let count=0;
    if (selectedOptions === "USD") {
      newData = {
        nameER: "United States Dollar",
        codeER: "USD",
        excER: 1,
        flagER: "US",
        countER: prec(inputUSD)
      }
      count ++;
    }
    else if (selectedOptions === "CAD") {
      newData = {
        nameER: "Canadian Dollar",
        codeER: "CAD",
        excER: prec(exc.CAD/exc.USD),
        flagER: "CA",
        countER: prec(exc.CAD*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "CHF") {
      newData = {
        nameER: "Swiss Franc",
        codeER: "CHF",
        excER: prec(exc.CHF/exc.USD),
        flagER: "CH",
        countER: prec(exc.CHF*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "GBP") {
      newData = {
        nameER: "British Pound",
        codeER: "GBP",
        excER: prec(exc.GBP/exc.USD),
        flagER: "GB-UKM",
        countER: prec(exc.GBP*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "INR") {
      newData = {
        nameER: "Indian Rupee",
        codeER: "INR",
        excER: prec(exc.INR/exc.USD),
        flagER: "IN",
        countER: prec(exc.INR*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "JPY") {
      newData = {
        nameER: "Japanese Yen",
        codeER: "JPY",
        excER: prec(exc.JPY/exc.USD),
        flagER: "JP",
        countER: prec(exc.JPY*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "KRW") {
      newData = {
        nameER: "South Korean Won",
        codeER: "KRW",
        excER: prec(exc.KRW/exc.USD),
        flagER: "KR",
        countER: prec(exc.KRW*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "MYR") {
      newData = {
        nameER: "Malaysian Ringgit",
        codeER: "MYR",
        excER: prec(exc.MYR/exc.USD),
        flagER: "MY",
        countER: prec(exc.MYR*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "IDR") {
      newData = {
        nameER: "Indonesian Rupiah",
        codeER: "IDR",
        excER: prec(exc.IDR/exc.USD),
        flagER: "ID",
        countER: prec(exc.IDR*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "SGD") {
      newData = {
        nameER: "Singapore Dollar",
        codeER: "SGD",
        excER: prec(exc.SGD/exc.USD),
        flagER: "SG",
        countER: prec(exc.SGD*inputUSD/exc.USD)
      }
      count ++;
    }
    else if (selectedOptions === "EUR") {
      newData = {
        nameER: "Euro",
        codeER: "EUR",
        excER: prec(exc.EUR/exc.USD),
        flagER: "EU",
        countER: prec(exc.EUR*inputUSD/exc.USD)
      }
      count ++;
    }

    let any = 0
    listCurr.map((row) =>{
      if (row.codeER === selectedOptions){
        any++;
      };
    });

    if (count && (any === 0)){
      setListCurr([...listCurr, newData])
    }
    setShowAddCurr(true)
    setShowSelectCurr(false)
  }

  const showAddOrCurr = () => {
    if (showAddCurr) {
      return(
        <AddCurrency setHandle={handleAddCurrency}/>
      )
    }
    if (showSelectCurr) {
      return(
        <SelectCurrency value={selectedOptions} 
                        setValue={setSelectedOptions} 
                        setHandle={handleSelectCurrency} 
                        curOption={currencyOptions}/>
      )
    }
  }
  

  return(
    <ChakraProvider>
      <Box w="100vw" bg='teal.900' overflowX="hidden">
        <Container>

          <Box minWidth={320}>
            <InputBox setValue={handleChangeAmount} inputAmount={inputUSD}/>
          </Box>

          <Box minWidth={320} minHeight="100vh" backgroundColor="gray.50" p={6}>
            {listCurr && listCurr.map((row, index) => (
					    <BoxER data={row} index={index} setValue={handleDeleteCurrencyAtIndex}/>
				    ))}
          <Box />

          {showAddOrCurr()}

          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
