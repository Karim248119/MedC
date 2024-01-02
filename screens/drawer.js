<View style={styles.navContainer}>
  <TouchableOpacity style={styles.nav}>
    <Entypo name="home" size={24} color={COLORS.white} />
    <Text style={styles.txt}>Dashboard</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nav}>
    <MaterialCommunityIcons
      name="file-question-outline"
      size={24}
      color={COLORS.white}
    />
    <Text style={styles.txt}>MCQs</Text>
  </TouchableOpacity>
  <View style={{width: '70%', height: 1, backgroundColor: COLORS.white}}></View>
  <TouchableOpacity style={styles.nav}>
    <Entypo name="log-out" size={24} color={COLORS.white} />
    <Text style={styles.txt}>Log Out</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nav}>
    <Ionicons name="settings" size={24} color="white" />
    <Text style={styles.txt}>Profile & Settings</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nav}>
    <MaterialCommunityIcons
      name="shield-alert"
      size={24}
      color={COLORS.white}
    />
    <Text style={styles.txt}>Privacy Policy</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.nav}>
    <AntDesign name="exclamationcircle" size={24} color="white" />
    <Text style={styles.txt}>About Us</Text>
  </TouchableOpacity>
</View>;
