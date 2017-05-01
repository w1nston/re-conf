import { branch, compose, renderComponent } from 'recompose';
import { gql, graphql } from 'react-apollo';
import Schedule from '../containers/Schedule';
import Loading from '../components/Loading';

const slug = 'reacteurope-2017';

const withLoading = branch(
  props => props.data.loading,
  renderComponent(Loading)
);

const query = gql`
  query conferenceSchedule {
    events(slug: "${slug}") {
      schedule {
        id,
        title
        description
        startDate
        type
        length
        speakers {
          id,
          name
          avatarUrl
          twitter,
        }
      }
    }
  }
`;

export default compose(graphql(query), withLoading)(Schedule);
