export async function fetchIssueData(issueNumber: number): Promise<unknown> {
	const owner = 'PiyushKalyanpy'
	const repo = 'Gyanaguru'

	const issue = await getGitHubIssue({owner, repo, issueNumber})
	return issue
}

interface GitHubIssueParams {
	owner: string
	repo: string
	issueNumber: number
}

export async function getGitHubIssue({
	owner,
	repo,
	issueNumber,
}: GitHubIssueParams): Promise<unknown> {
	const response = await fetch(
		`https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`,
	)
	const issue = await response.json()
	return issue
}
