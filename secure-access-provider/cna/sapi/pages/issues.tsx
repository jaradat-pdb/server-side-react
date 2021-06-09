import React from 'react';
import { Issue, Props } from '../interfaces/index';

const initialIssues: Issue[] = [
    {
        id: 1,
        status: 'New',
        owner: 'Waleed',
        effort: 5,
        created: new Date('2021-04-20'),
        due: undefined,
        title: 'Error in console when clicking Add'
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Nasser',
        effort: 7,
        created: new Date('2021-04-18'),
        due: new Date('2021-05-01'),
        title: 'Missing bottom border on panel'
    }
];

const sampleIssue: Issue = {
    id: 3,
    status: 'New',
    owner: 'Khaled',
    effort: 3,
    created: new Date(),
    title: 'Completion date should be optional'
};

class IssueAdd extends React.Component {
    render() {
        return(
            <div title="Add issue div">
                This is a placeholder for a form to add an issue.
            </div>
        );
    }
}

class IssueFilter extends React.Component {
    render() {
        return(
            <div title="Filter issue div">
                This is a placeholder for the issue filter.
            </div>
        );
    }
}

class IssueTable extends React.Component<{}, { issues: Issue[]}> {
    constructor(props: Props) {
        super(props);
        this.state = {
            issues: []
        };
        setTimeout(() => {
            this.createIssue(sampleIssue);
        }, 10000);
    }

    componentDidMount() {
        this.loadData();
    }

    createIssue(issue: Issue) {
        const newIssueList = this.state.issues.slice();
        issue.id = this.state.issues.length + 1;
        issue.created = new Date();
        newIssueList.push(issue);
        this.setState({
            issues: newIssueList
        });
    }

    loadData() {
        setTimeout(() => {
            this.setState({
                issues: initialIssues
            });
        }, 5000);
    }

    render() {
        const issueRows = this.state.issues.map(
            (issue: Issue) => <IssueRow key={issue.id} issue={issue}/>
        );
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    }
}

let issueRowRenderCounter = 0;
class IssueRow extends React.Component<{ issue: Issue }, {}> {
    render() {
        const issue = this.props.issue;
        issueRowRenderCounter += 1;
        console.log(`Rendering issue with id=${issue.id}, render call=${issueRowRenderCounter}`);
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.due ? issue.due.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        );
    }
}

export default class Issues extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <hr/>
                <IssueFilter/>
                <hr/>
                <IssueTable/>
                <hr/>
                <IssueAdd/>
            </React.Fragment>
        );
    }
}
