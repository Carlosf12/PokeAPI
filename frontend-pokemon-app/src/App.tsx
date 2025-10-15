import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Pokemon Trainer Portal</CardTitle>
          <CardDescription>Test Shadcn/ui Components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="ash_ketchum" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="ash@pokemon.com" />
          </div>
          <Button className="w-full">Sign Up</Button>
          <Button variant="outline" className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App