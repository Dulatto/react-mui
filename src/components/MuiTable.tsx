import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key={row.id} sx={{'&:last-child td, &:last-child th':{border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData= [{
    "id": 1,
    "first_name": "Mavra",
    "last_name": "Garrood",
    "email": "mgarrood0@photobucket.com",
    "gender": "Female",
    "ip_address": "165.0.80.35"
  }, {
    "id": 2,
    "first_name": "Bartie",
    "last_name": "Denerley",
    "email": "bdenerley1@paypal.com",
    "gender": "Male",
    "ip_address": "101.242.22.162"
  }, {
    "id": 3,
    "first_name": "Alvina",
    "last_name": "Headrick",
    "email": "aheadrick2@tmall.com",
    "gender": "Female",
    "ip_address": "237.22.98.79"
  }, {
    "id": 4,
    "first_name": "Garrik",
    "last_name": "Maffini",
    "email": "gmaffini3@indiegogo.com",
    "gender": "Male",
    "ip_address": "171.229.233.43"
  }, {
    "id": 5,
    "first_name": "Odessa",
    "last_name": "Blais",
    "email": "oblais4@technorati.com",
    "gender": "Bigender",
    "ip_address": "60.174.35.154"
  }, {
    "id": 6,
    "first_name": "Gauthier",
    "last_name": "Spire",
    "email": "gspire5@jiathis.com",
    "gender": "Male",
    "ip_address": "125.85.219.223"
  }, {
    "id": 7,
    "first_name": "Ginni",
    "last_name": "Boseley",
    "email": "gboseley6@so-net.ne.jp",
    "gender": "Female",
    "ip_address": "69.219.16.166"
  }, {
    "id": 8,
    "first_name": "Burnaby",
    "last_name": "Christescu",
    "email": "bchristescu7@adobe.com",
    "gender": "Male",
    "ip_address": "73.99.44.251"
  }, {
    "id": 9,
    "first_name": "Arlana",
    "last_name": "Roman",
    "email": "aroman8@fema.gov",
    "gender": "Agender",
    "ip_address": "37.20.173.138"
  }, {
    "id": 10,
    "first_name": "Leroi",
    "last_name": "De Meis",
    "email": "ldemeis9@ovh.net",
    "gender": "Male",
    "ip_address": "244.26.126.72"
  }]
  