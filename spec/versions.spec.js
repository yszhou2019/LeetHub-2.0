import { normalizeLeetCodeCnSubmissionData } from '../scripts/leetcode/versions.js';

describe('normalizeLeetCodeCnSubmissionData', () => {
  it('should prefer English title and content for README data', () => {
    const submissionData = {
      code: 'class Solution {}',
      runtime: '0 ms',
      memory: '40 MB',
      statusDisplay: 'Accepted',
      timestamp: '1234567890',
      lang: 'java',
      question: {
        questionId: '1',
        title: 'Two Sum',
        translatedTitle: '两数之和',
        titleSlug: 'two-sum',
      },
    };
    const questionData = {
      questionFrontendId: '1',
      content: '<p>English content</p>',
      translatedContent: '<p>中文题面</p>',
      difficulty: 'Easy',
      topicTags: [{ name: 'Array', slug: 'array', translatedName: '数组' }],
    };

    const result = normalizeLeetCodeCnSubmissionData(submissionData, questionData);

    expect(result.question.title).toBe('Two Sum');
    expect(result.question.content).toBe('<p>English content</p>');
  });
});
