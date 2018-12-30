import { getStatusBarHeight } from 'react-native-status-bar-height';

export default {
  colors: {
    primary: "#1C2BA5",
    secondary: "#F3C13A",
    background: "#FFF",
    secondaryBackground: "#F7F7F7",
    borderColor: "#EEE",
    primaryFont: "#333",
    secondaryFont: "#666",
    dangerFont: "#C3272B",
    successFont: "#26A65B"
  },
  dimensions: {
    distances: [5, 10, 15, 20],
    statusBarHeight: getStatusBarHeight()
  }
};