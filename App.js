import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View
          style={{
            height: 200,
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Image
            source={require("./src/img/eyeball.png")}
            style={{ width: "90%", height: "90%" }}
          ></Image>
        </View>
      </View>
      <View style={styles.two}>
        <View
          style={{
            height: 60,
            width: "85%",
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "grey",
            // marginTop: -40,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "15%",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Image source={require("./src/img/user.png")}></Image>
          </View>
          <View
            style={{
              height: "100%",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Please input username"
              style={{ fontWeight: "400", fontSize: 18 }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            height: 60,
            width: "85%",
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "grey",
            marginTop: 30,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "15%",
              justifyContent: "center",
            }}
          >
            <Image source={require("./src/img/lock.png")}></Image>
          </View>
          <View
            style={{
              height: "100%",
              width: "80%",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Please input password"
              style={{ fontWeight: "400", fontSize: 18 }}
            ></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.three}>
        <View
          style={{
            width: "85%",
            height: 50,
            backgroundColor: "#386FFC",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "400", fontSize: 20, color: "#fff" }}>
            LOGIN
          </Text>
        </View>
      </View>
      <View style={styles.four}>
        <View
          style={{
            width: "90%",
            height: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "40%",
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400" }}>Register</Text>
          </View>
          <View
            style={{
              height: "100%",
              width: "60%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              Forgot Password
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.five}>
        <View
          style={{
            width: "85%",
            height: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: -10,
            // borderWidth: 1,
          }}
        >
          <View
            style={{
              height: "100%",
              width: "20%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                height: 0,
                width: "100%",
                borderColor: "#595ff8",
              }}
            ></View>
          </View>
          <View
            style={{
              height: "100%",
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "400" }}>
              Other Login Methods
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderWidth: 1,
                height: 0,
                width: "100%",
                borderColor: "#595ff8",
              }}
            ></View>
          </View>
        </View>
      </View>
      <View style={styles.six}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "33.33%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("./src/img/contact.png")}></Image>
          </View>
          <View
            style={{
              height: "100%",
              width: "33.33%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("./src/img/wifi.png")}></Image>
          </View>
          <View
            style={{
              height: "100%",
              width: "33.33%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 74,
                width: 74,
                backgroundColor: "#3a579c",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Image source={require("./src/img/fb.png")}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#f6c701",
  },

  // 1
  one: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  // 2
  two: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  // // 3
  three: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
  },

  // 4
  four: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
  },

  //5
  five: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
  },

  //6
  six: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
});
