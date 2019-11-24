import AsyncStorage from "@react-native-community/async-storage";
import { Store } from "./store";

export class Database {
  static async saveData(key: string, value: any): Promise<any> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  }

  static getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {}
  };
}
