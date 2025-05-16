export default function ApiPage() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 tech-font">API</h1>

        <div className="glass-card p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">API Documentation</h2>
          <p className="text-muted-foreground mb-6">
            This page provides documentation for the available API endpoints on this site.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Form</h3>
              <p className="text-muted-foreground mb-4">
                The contact form currently operates in demo mode and does not send actual emails. When implemented, it
                will use a secure backend service to process form submissions.
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-mono text-sm">
                  <span className="text-swiss-red">POST</span> /api/contact
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="text-muted-foreground mb-4">
                This endpoint would provide information about portfolio projects.
              </p>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-mono text-sm">
                  <span className="text-green-500">GET</span> /api/projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
