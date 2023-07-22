export async function fetchIssueData(issue_number: number) {
    const owner = 'PiyushKalyanpy';
    const repo = 'Gyanaguru';
    const issueNumber = issue_number; // Replace with the desired issue number

    const issue = await getGitHubIssue({owner, repo, issueNumber});
    return issue;
}

export async function getGitHubIssue({owner, repo, issueNumber} : any) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}`);
    const issue = await response.json();
    return issue;
}