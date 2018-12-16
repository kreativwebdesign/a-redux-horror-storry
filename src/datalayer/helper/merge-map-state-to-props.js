export const mergeMapStateToProps = (one, two = () => ({})) => (state, props) => {
  return {
    ...one(state, props),
    ...two(state, props)
  }
}