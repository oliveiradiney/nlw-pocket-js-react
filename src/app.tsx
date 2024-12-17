import { Dialog } from './components/ui/dialog'
import { Summary } from './components/summary'
import { useEffect, useState } from 'react'
import { EmptyGoals } from './components/empty-goals'

export function App() {
  const [summary, SetSummary] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3333/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        SetSummary(data.summary)
      })
  }, [])

  return (
    <Dialog>
      {summary?.total > 0 ? <Summary /> : <EmptyGoals />}

      {/* <EmptyGoals /> */}
      {/* <Summary />
      <CreateGoal /> */}
    </Dialog>
  )
}
