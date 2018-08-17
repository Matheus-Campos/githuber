import { StyleSheet } from 'react-native';
import { colors, metrics, general } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.container,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin,
  },
  repoTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    marginLeft: metrics.baseMargin / 2,
    fontSize: 12,
  },
});

export default styles;
