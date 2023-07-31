import React,{useState, useEffect} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions
} from 'react-native'
import styles from './styles'
const windowWidth = Dimensions.get('window').width;
const Rating = ({
    data=[],

    primaryColor="#388E3C",
    primaryFontFamily="Poppins-Regular",
    primaryFontSize=windowWidth * 0.04,

}) => {
    
    function getAverageRating(){
        const totalRatings = data.length;
        const sumRatings = data.reduce((sum, rating) => sum + rating.rating, 0);
        const averageRating = sumRatings / totalRatings;
        return averageRating.toFixed(2)
    }
    function printStar(rating){
        var arr = []
        for(let i = 0; i < 5; i++){
            arr.push(<View key={i.toString()} style={{flex:1,}}>
                <Image 
                key={i.toString()}
                style={{
                    height:'100%',
                    width:'100%',
                    resizeMode:'contain',
                    tintColor:i < Math.floor(rating) ? primaryColor : 'gray'
                }}
                source={require('../images/star.png')}
            />
            </View>)
        }
        return arr
    }

    function printRatingsRows(){
        let arr = []

        for( rate in extractRatingCounts()){
            arr.push(<View key={rate.toString()} style={{flexDirection:'row', marginTop:6}}>
            <View style={{height:20,width:20, alignItems:'center', justifyContent:'center'}}>
                <Text style={{
                    fontFamily:primaryFontFamily,
                    color:'#666666',
                    fontSize:primaryFontSize
                }}>{rate}</Text>
            </View>
            <View style={{flex:1, justifyContent:'center'}}>
                <View style={{height:12, backgroundColor:'#D3D3D3', borderRadius:30, justifyContent:'center'}}>
                    <View style={{height:12, width:`${((extractRatingCounts()[rate]/data.length)*100)}%`, backgroundColor:primaryColor, borderRadius:30}}/>
                </View>
            </View>
        </View>)
        }
        return arr
    }
function extractRatingCounts() {
    const ratingCounts = {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    };
    
    data.forEach(rating => {
      ratingCounts[rating.rating]++;
    });
    
    return ratingCounts;
  }

  function renderReview(el){
    const [isFullText, setIsFullText] = useState(false)

    return <View key={el?.id} style={{  }}>
        <View style={{flexDirection:'row'}}>
            <View style={{
                height:40, 
                width:40, 
                borderRadius:40/2, 
                backgroundColor:generateRandomColorCode(),
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{
                    fontFamily:primaryFontFamily,
                    color:'white',
                    fontSize:windowWidth * 0.052
                }}>{el.name[0]}</Text>
            </View>
            <Text style={{
                fontSize:primaryFontSize,
                fontFamily:primaryFontFamily,
                color:'#141519',
                alignSelf:'center',
                marginLeft:12
            }}>{el.name}</Text>
        </View>
        <View style={{flexDirection:'row', marginTop:12,}}>
            <View style={{height:20, width:'20%', flexDirection:'row'}}>
                {printStar(el.rating)}
            </View>
            <Text style={{
                fontSize:primaryFontSize-2,
                fontFamily:primaryFontFamily,
                color:'#141519',
                alignSelf:'center',
                marginLeft:8
            }}>{el.date}</Text>
        </View>
        <View style={{width:'100%', marginTop:8,}}>
            {
                el.comment.length < 200
                ?
                <Text style={{ fontSize:primaryFontSize, fontFamily:primaryFontFamily, color:'#141519', }}>
                { el.comment }
                </Text>
                :
                !isFullText 
                ?
                <Text onPress={() => setIsFullText(!isFullText)}
                style={{ fontSize:primaryFontSize, fontFamily:primaryFontFamily, color:'#141519', }}>
                { el.comment.slice(0,200) + "..." }
                </Text>
                :
                <Text onPress={() => setIsFullText(!isFullText)}
                style={{ fontSize:primaryFontSize, fontFamily:primaryFontFamily, color:'#141519', }}>
                { el.comment }
                </Text>
            }
        </View>
        
    </View>
  }
  function generateRandomColorCode() {
    const letters = "0123456789ABCDEF";
    let colorCode = "#";
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      colorCode += letters[randomIndex];
    }
  
    return colorCode;
  }
      
    return <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.totalRatingContainer}>
                    <Text style={{
                        color:"#141519",
                        fontSize:windowWidth * 0.095,
                        fontFamily:primaryFontFamily,
                    }}>{getAverageRating()}</Text>
                    <View style={{flexDirection:'row', height:20}}>{printStar(getAverageRating())}</View>
                    <Text style={{
                        fontSize:primaryFontSize,
                        color:"#666666",
                        fontFamily:primaryFontFamily,
                        marginTop:8
                    }}>{data.length}</Text>
                </View>
                <View style={{flex:3, flexDirection:'column-reverse', paddingLeft:12}}>
                    {printRatingsRows()}
                </View>
            </View>
            <View style={{flex:1, marginTop:24}}>
                <ScrollView>
                  {
                    data.map(el => renderReview(el))
                  }  
                </ScrollView>
            </View>
    </View>
}

export default Rating