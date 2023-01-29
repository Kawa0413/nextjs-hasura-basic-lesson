/**
* @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

// テストの動作確認用のテストコード
// index.tsxのなかにNext.js!の記述があるので正常に作成できていればtestが通るはず
it('Should render title text', () => {
  render(<Home />)
  expect(screen.getByText('Next.js+GraphQL')).toBeInTheDocument()
})