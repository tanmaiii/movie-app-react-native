import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React from "react";
import AppHeader from "../../components/AppHeader";

import styles from "./style";

import SettingsComponent from "../../components/SettingComponent";

const UserAccountScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.appHeaderContainer}>
        <AppHeader name="close" action={() => navigation.goBack()} header={"My Profile"} />
      </View>

      <View style={styles.avatarContainer}>
        <Image style={styles.avatarImage} source={require("../../assets/image/avatar.jpg")} />
        <Text style={styles.avatarText}>Tấn Mãi</Text>
      </View>

      <SettingsComponent
        icon="person-outline"
        header="Tài khoản"
        subheading="Thông tin"
        subtitle="Thay đôi mật khẩu"
      />

      <SettingsComponent
        icon="settings-outline"
        header="Cài đặt"
        subheading="Màu sắc"
        subtitle="Quyền riêng tư"
      />

      <SettingsComponent
        icon="wallet-outline"
        header="Ví & Thanh toán"
        subheading="Ví"
        subtitle="Thanh toán"
      />

      <SettingsComponent
        icon="alert-circle-outline"
        header="Chúng tôi"
        subheading="Giới thiệu"
        subtitle="Địa chỉ"
      />
    </ScrollView>
  );
};

export default UserAccountScreen;
