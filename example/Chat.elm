port module Chat exposing (main)

import Html exposing (..)
import Html.App as App
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import WebSocket as WS


main : Program String
main =
    App.programWithFlags
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


type alias Model =
    { server : String
    , input : String
    , messages : List String
    }


init : String -> ( Model, Cmd Msg )
init server =
    Model server "" []
        ! []



-- UPDATE


type Msg
    = Input String
    | Send
    | NewEmoji String
    | NewMessage String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Input newInput ->
            { model | input = newInput }
                ! []

        Send ->
            { model | input = "" }
                ! [ WS.send model.server model.input ]

        NewEmoji emoji ->
            { model | input = model.input ++ emoji }
                ! []

        NewMessage str ->
            { model | messages = str :: model.messages }
                ! []



-- SUBSCRIPTIONS


port emoji : (String -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions { server } =
    Sub.batch
        [ emoji NewEmoji
        , WS.listen server NewMessage
        ]



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ input [ onInput Input, value model.input ] []
        , button [ onClick Send ] [ text "Send" ]
        , div [] (List.map viewMessage (List.reverse model.messages))
        ]


viewMessage : String -> Html msg
viewMessage msg =
    div [] [ text msg ]
