import GraphQLDate from 'graphql-date';
import graphql, {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

const TaskType = new GraphQLObjectType({
    name: 'TaskType',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        deadline: { type: GraphQLDate },
        creationDate: { type: new GraphQLNonNull(GraphQLDate) }
    }
});

export default TaskType;
