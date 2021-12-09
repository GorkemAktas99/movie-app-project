import { gql } from 'apollo-boost'

export const getDirectorQuery = gql`
    {
        directors{
            id,
            name
        }
    }
`;

export const getMoviesQuery = gql`
{
    movies{
        id,
        title,
        description
    }
}
`;

export const newMovieMutation = gql`
mutation($title: String!, $description: String, $year: Int!, $directorId: String! ){
    addMovie(title:$title, description:$description, year:$year, directorId:$directorId){
        title
    }
}
`;

export const getMovieQuery = gql`
query($id:String){
    movie(id:$id){
        id,
        title,
        description,
        year,
        director{
            name,
            movies{
                id,
                title
            }
        }
    }
}
`;