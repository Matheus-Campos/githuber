import { StyleSheet } from 'react-native';
import { metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginTop: metrics.basePadding,
  },
  columnWrapper: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between',
  },
});

export default styles;
