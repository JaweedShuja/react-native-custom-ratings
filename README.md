# react-native-customized-ratings

## Introduction
A React-Native Rating component to show a Ratings and Review. This Component is fully customized, you can modify it as per your need.
* Show Average Reviews and Ratings
* Show Reviews


Rating View with Reviews             |
:-------------------------:
<img width="358" alt="Screenshot 2023-06-12 at 2 12 01 PM" src="https://github.com/JaweedShuja/react-native-customized-calendar/assets/56365178/ddcc1237-9dbe-4baa-ac67-3e72867a63a4">



## Installation

If using yarn:

```
yarn add react-native-custom-ratings
```

If using npm:

```
npm i react-native-custom-ratings
```


## Usage

```
import Rating from 'react-native-custom-ratings'
```

Simply place a `<Rating />` tag for showing Ratings.

```
<View style={{ flex:1, }}>
        <Rating data={[
      {
        id:"1",
        comment:"Good.",
        rating:5, 
        name:"Alex John", 
        date:"5/25/23",
      },
      {
        id:"2",
        comment:"Amazing!",
        rating:4, 
        name:"Jaweed Shuja", 
        date:"4/12/23",
      }]} />
    </View>
```




## Documentation

### Rating Component
| Name                                    | Description                                                                   | Default    | Type    |
|-----------------------------------------|-------------------------------------------------------------------------------|------------|---------|
| data                                | reviews data which will shown on screen data format should be { id:"", comment:"", rating:5,  name:"",  date:"", }                                                 | []         | Array     |  
| primaryColor                            | Primary color of component                                                    | Poppins-Regular    | String  | 
| primaryFontFamily                              | Primary font family of texts on component                                             | ()=>{}     | Func    |
| primaryFontSize                           | Font size of all texts on component                                                            | 16      | Int  | 

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Jaweed Shuja

## License
[MIT](./LICENSE)

