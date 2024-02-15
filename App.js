import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

const image1 = { uri: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/5373/Black-3D-Blocks-iphone-wallpaper-ilikewallpaper_com.jpg' };


// const image1 = { uri: 'https://img.freepik.com/free-vector/top-view-coffee-cup-with-realistic-design_23-2147919524.jpg' };


export default function App() {
  const [searchText, setSearchText] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image1} resizeMode="stretch" style={styles.image}>
        <View style={styles.cnt11}>
          <View style={styles.cnt1}>
            <Text style={styles.location1}>Location</Text>
            <Text style={styles.location2}>DHA, Lahore </Text>
          </View>
          <View style={styles.cnt2}>
            <Image
              style={styles.profile}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqAoqYS354cQ6t41Xk6Jzno3bAeXxWgZ-ew&usqp=CAU',
              }}
            />
          </View>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search coffee"
          value={searchText}
          onChangeText={setSearchText}
        />
      </ImageBackground>


      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Cappuccino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Latte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Espresso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Black Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Mocha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Americano</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Flat White</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Cafe Au Late</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Macchiato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Cold Brew</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Irish Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Frappe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Vietnamese Coffee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Affogato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Red Eye</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.items}>
          <Text style={styles.itemstext}>Cappuccino</Text>
        </TouchableOpacity>
      </ScrollView>


      <ScrollView horizontal={true} style={styles.first}>
        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://img.freepik.com/free-vector/top-view-coffee-cup-with-realistic-design_23-2147919524.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Chocolate</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*3.4</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.53</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-067s.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Oat Milk</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*4.1</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.70</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://banner2.cleanpng.com/20231002/osp/transparent-coffee-651a6dbad1ea09.7134952816962308428598.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Holly Nuts</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*4.5</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 4.0</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://brewespressocoffee.com/wp-content/uploads/2022/01/Cappuccino-in-white-cup-on-a-saucer.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Brownie</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*3.7</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.44</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <ScrollView horizontal={true} style={styles.first}>
        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://brewespressocoffee.com/wp-content/uploads/2022/01/Cappuccino-in-white-cup-on-a-saucer.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Brownie</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*3.7</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.44</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://banner2.cleanpng.com/20231002/osp/transparent-coffee-651a6dbad1ea09.7134952816962308428598.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Holly Nuts</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*4.5</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 4.0</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://img.freepik.com/free-vector/top-view-coffee-cup-with-realistic-design_23-2147919524.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Chocolate</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*3.4</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.53</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container1}>
          <View style={styles.parent1}>
            <Image
              style={styles.image1}
              source={{
                uri: 'https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-067s.jpg',
              }}
            />
          </View>
          <View style={styles.parent2}>
            <View style={styles.child1}>
              <Text style={styles.itemText}>Cappucino</Text>
              <Text style={styles.itemText1}>with Oat Milk</Text>
            </View>
            <View style={styles.child2}>
              <Text style={styles.itemrating}>*4.1</Text>
            </View>
          </View>
          <View style={styles.parent3}>
            <Text style={styles.itemPrice}>$ 3.70</Text>
            <TouchableOpacity style={styles.plusp} onPress={() => alert('add')}>
              <Text style={styles.plustext}>+</Text>
            </TouchableOpacity>
          </View>
        </View>


      </ScrollView>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  cnt11: {
flexDirection: 'row',
justifyContent: 'space-between',
marginHorizontal: 30,
marginTop: 70,
  },
  location1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  location2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchInput: {
    height: 45,
    fontSize: 15,
    width: '80%',
    borderColor: 'darkgrey',
    backgroundColor: 'darkgrey',
    borderWidth: 1,
    paddingHorizontal: 8,
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 30,
  },
  itemText: {
    fontSize: 20,
  },
  itemText1: {
    fontSize: 14,
    color: 'grey'
  },
  itemrating: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
    marginTop: 10
  },
  itemPrice: {
    fontSize: 20,
    color: 'black',
  },
  image1: {
    height: 159,
    width: 148,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
  },
  parent1: {
    height: 160,
    width: 150,
  },
  Container1: {
    height: 250,
    width: 150,
    backgroundColor: '#ffc',
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 20,
    marginVertical: 30,
  },
  plusp: {
    backgroundColor: '#cd853f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  plustext: {
    color: "#fff",
    fontSize: 15,
  },
  parent2: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  parent3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  first: {
    backgroundColor: '#f0f8ff'
  },
  items: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 3,
  },
  itemstext: {
    margin: 5,
    fontSize: 15.
  },

});



{/* <Image
  style={styles.tinyLogo}
  source={{
    uri: 'https://img.freepik.com/free-vector/top-view-coffee-cup-with-realistic-design_23-2147919524.jpg',
  }}
/> */}