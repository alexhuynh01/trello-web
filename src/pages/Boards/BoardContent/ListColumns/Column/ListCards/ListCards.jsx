import Box from '@mui/material/Box'
import TrelloCard from './TrelloCard/TrelloCard'

function ListCards({ cards }) {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} -
      ${theme.spacing(5)} -
      ${theme.trello.columnHeaderHeight} -
      ${theme.trello.columnFooterHeight}
    )`,
      '&::-webkit-scrollbar-thumb': { background: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { background: '#bfc2cf' }
    }}>
      {cards?.map(card => <TrelloCard key={card._id} card={card} />)}


    </Box>
  )
}

export default ListCards
