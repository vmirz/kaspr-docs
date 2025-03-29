import React from 'react';
import styles from './style.module.css'
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export function OptionTable({ options }: { options: [string, any, any, string, any] }) {
  return (
    <div
      className={
        '-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-neutral-700">
            <th className="py-2 font-semibold">Field</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="py-2 pl-6 font-semibold">Default</th>
            <th className="px-2 py-2 font-semibold">Required</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([field, type, _default, description, required]) => (
          <React.Fragment key={field}>
            {/* Main row with field, type, default, and required */}            
            <tr
              key={field}
              className="border-gray-100 dark:border-neutral-700/50"
            >
              <td className="whitespace-pre py-2 font-mono text-s font-semibold leading-6 text-red-600 dark:text-red-500">
                {field}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-mono text-s font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {typeof type === 'object' && type.href ? (
                  <Link className="text-blue-500 hover:text-blue-700 font-semibold" href={`${type.href}` }>
                    {type.label}
                  </Link>
                ) : (
                  type
                )}
              </td>
              <td className="py-2 pl-6">
                <ReactMarkdown>{_default}</ReactMarkdown>
              </td>              
              { required === 'Yes' ? (
                <td className="py-2 pl-6 text-red-600 dark:text-red-500 font-semibold">{required}</td>) :(
                <td className="py-2 pl-6">{required}</td>)}
            </tr>
            {/* Description row */}
            <tr className="border-b border-gray-100 dark:border-neutral-700/50">
              <td colSpan={4} className="py-2 pb-8 text-base">
                <ReactMarkdown>{description}</ReactMarkdown>
              </td>
            </tr>            
          </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}
