import React from "react"
import { Card, Flex, Grid, Metric, Text } from "@tremor/react"

const AdminDash = () => {
  return (
    <div>
      <Flex className="p-2 gap-2" alignItems="center" justifyContent="around">
        <Card className="p-2">
          <Text>Users</Text>
          <Metric>6</Metric>
        </Card>
        <Card className="p-2">
          <Text>Admins</Text>
          <Metric>1</Metric>
        </Card>

        <Card className="p-2">
          <Text>Photos</Text>
          <Metric>93</Metric>
        </Card>
      </Flex>

      <Grid className="p-2 gap-2" numCols={3}>
        <Card className="p-2 w-18 h-16 flex items-center justify-center" >
          <Text>View Site Analytics</Text>
        </Card>

        <Card className="p-2 w-18 h-16 flex items-center justify-center" >
          <Text>Admin Management</Text>
        </Card>

        <Card className="p-2 w-18 h-16 flex items-center justify-center" >
          <Text>User Management</Text>
        </Card>

        <Card className="p-2 w-18 h-16 flex items-center justify-center" >
          <Text>View Reported Contents</Text>
        </Card>

        <Card className="p-2 w-18 h-16 flex items-center justify-center" >
          <Text>Settings</Text>
        </Card>
      </Grid>
    </div>
  )
}

export default AdminDash
