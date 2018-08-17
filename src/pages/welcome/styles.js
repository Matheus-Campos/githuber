import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  text: {
    color: colors.light,
    lineHeight: 21,
    marginTop: metrics.baseMargin,
    fontSize: 14,
    textAlign: 'center',
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
    height: 44,
    borderRadius: metrics.baseRadius,
  },
  button: {
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: metrics.baseRadius,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
