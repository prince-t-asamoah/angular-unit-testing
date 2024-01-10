import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  it('should start with no message', () => {
    const loggerService = new LoggerService();
    let messagesCount = loggerService.messages.length;
    expect(messagesCount).toBe(0);
  });

  it('should add message when log is called', () => {
    const loggerService = new LoggerService();
    loggerService.log('message');
    expect(loggerService.messages.length).toBe(1);
  });
});
